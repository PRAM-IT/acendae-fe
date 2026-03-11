pipeline {
    agent any

    options {
        disableConcurrentBuilds()
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }

    environment {
        DEPLOY_HOST  = '109.163.225.82'
        DEPLOY_PORT  = '26'
        DEPLOY_USER  = 'acendaecom'
        DEPLOY_PATH  = '/home/acendaecom/domains/staging.acendae.com/public_html'
        BACKUP_PATH  = '/home/acendaecom/backups/acendae-fe'
        APP_URL      = 'https://staging.acendae.com'
    }

    tools {
        nodejs 'Node-20'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'staging',
                    credentialsId: 'github-pat',
                    url: 'https://github.com/PRAM-IT/acendae-fe.git'
            }
        }

        stage('Install Node Dependencies') {
            steps {
                sh 'npm install --include=dev'
            }
        }

       stage('Generate Wayfinder') {
            steps {
                sh 'node node_modules/.bin/wayfinder 2>/dev/null || true'
            }
        }
        
        stage('Build Vue Assets') {
            steps {
                sh '''
                    npm install vite@^6.3.5 @vitejs/plugin-vue@^5.2.1 laravel-vite-plugin@^1.2.0 --save-dev --no-save
                    # Remove wayfinder plugin from vite config so it doesn't call php artisan
                    sed -i "/wayfinder/d" vite.config.js 2>/dev/null || true
                    sed -i "/wayfinder/d" vite.config.ts 2>/dev/null || true
                    npm run build
                '''
            }
        }

        stage('Package') {
            steps {
                sh '''
                    rm -f /tmp/acendae-fe-deploy.tar.gz
                    tar --exclude=".git" \
                        --exclude="*.env" \
                        --exclude="vendor/*" \
                        --exclude="public/hot" \
                        --exclude="storage/logs/*" \
                        --exclude="storage/framework/cache/data/*" \
                        --exclude="storage/framework/sessions/*" \
                        --exclude="storage/framework/views/*" \
                        --exclude="bootstrap/cache/*" \
                        -czf /tmp/acendae-fe-deploy.tar.gz . || true
                    [ -f /tmp/acendae-fe-deploy.tar.gz ] && echo "Package OK" || exit 1
                '''
            }
        }

        stage('Backup') {
            steps {
                sshagent(['directadmin-ssh-acendaecom']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no -p ${DEPLOY_PORT} ${DEPLOY_USER}@${DEPLOY_HOST} \
                        "mkdir -p ${BACKUP_PATH}/previous && \
                        cp -r ${DEPLOY_PATH}/app ${BACKUP_PATH}/previous/ 2>/dev/null || true && \
                        cp -r ${DEPLOY_PATH}/public ${BACKUP_PATH}/previous/ 2>/dev/null || true && \
                        cp ${DEPLOY_PATH}/.env ${BACKUP_PATH}/previous/ 2>/dev/null || true && \
                        echo 'Backup done'"
                    """
                }
            }
        }

        stage('Upload Package') {
            steps {
                sshagent(['directadmin-ssh-acendaecom']) {
                    sh """
                        scp -o StrictHostKeyChecking=no -P ${DEPLOY_PORT} \
                            /tmp/acendae-fe-deploy.tar.gz \
                            ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/deploy.tar.gz
                    """
                }
            }
        }

        stage('Upload .env') {
            steps {
                withCredentials([file(credentialsId: 'acendae-fe-env-file', variable: 'ENV_FILE')]) {
                    sshagent(['directadmin-ssh-acendaecom']) {
                        sh """
                            scp -o StrictHostKeyChecking=no -P ${DEPLOY_PORT} \
                                \$ENV_FILE \
                                ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/.env
                        """
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                sshagent(['directadmin-ssh-acendaecom']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no -p ${DEPLOY_PORT} ${DEPLOY_USER}@${DEPLOY_HOST} \
                        "cd ${DEPLOY_PATH} && \
                        tar -xzf deploy.tar.gz && \
                        rm -f deploy.tar.gz && \
                        /usr/local/bin/composer install --no-dev --optimize-autoloader --no-interaction --no-scripts && \
                        echo 'Extracted and composer done'"
                    """
                }
            }
        }

        stage('Fix Symlinks') {
            steps {
                sshagent(['directadmin-ssh-acendaecom']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no -p ${DEPLOY_PORT} ${DEPLOY_USER}@${DEPLOY_HOST} \
                        "cd ${DEPLOY_PATH} && \
                        rm -f build images && \
                        ln -sfn ${DEPLOY_PATH}/public/build ${DEPLOY_PATH}/build && \
                        ln -sfn ${DEPLOY_PATH}/public/images ${DEPLOY_PATH}/images && \
                        chmod -R 775 storage bootstrap/cache && \
                        php artisan storage:link 2>/dev/null || true && \
                        echo 'Symlinks OK'"
                    """
                }
            }
        }

        stage('Strip Passenger Block') {
            steps {
                sshagent(['directadmin-ssh-acendaecom']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no -p ${DEPLOY_PORT} ${DEPLOY_USER}@${DEPLOY_HOST} \
                        "sed -i '/# DO NOT REMOVE. CLOUDLINUX PASSENGER CONFIGURATION BEGIN/,\\\$ d' \
                            ${DEPLOY_PATH}/.htaccess && \
                        echo 'Passenger block removed'"
                    """
                }
            }
        }

        stage('Artisan') {
            steps {
                sshagent(['directadmin-ssh-acendaecom']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no -p ${DEPLOY_PORT} ${DEPLOY_USER}@${DEPLOY_HOST} \
                        "cd ${DEPLOY_PATH} && \
                        php artisan package:discover --ansi 2>/dev/null || true && \
                        php artisan wayfinder:generate 2>/dev/null || true && \
                        php artisan config:clear && \
                        php artisan cache:clear && \
                        php artisan route:clear && \
                        php artisan view:clear && \
                        set -a && source .env && set +a && \
                        php artisan migrate --force && \
                        php artisan config:cache && \
                        php artisan route:cache && \
                        php artisan view:cache && \
                        echo 'Artisan done'"
                    """
                }
            }
        }

        stage('Health Check') {
            steps {
                script {
                    def healthy = false
                    for (int i = 0; i < 5; i++) {
                        def status = sh(
                            script: "curl -k -L -o /dev/null -w '%{http_code}' ${APP_URL} || true",
                            returnStdout: true
                        ).trim()
                        echo "Attempt ${i+1}: HTTP ${status}"
                        if (status == '200') {
                            healthy = true
                            break
                        }
                        sleep(15)
                    }
                    if (!healthy) {
                        error("Health check failed")
                    }
                }
            }
        }
    }

    post {
        failure {
            echo 'Deploy failed — rolling back...'
            sshagent(['directadmin-ssh-acendaecom']) {
                sh """
                    ssh -o StrictHostKeyChecking=no -p ${DEPLOY_PORT} ${DEPLOY_USER}@${DEPLOY_HOST} \
                    "cp -r ${BACKUP_PATH}/previous/. ${DEPLOY_PATH}/ 2>/dev/null || true && \
                    cd ${DEPLOY_PATH} && php artisan config:clear 2>/dev/null || true && \
                    echo 'Rollback done'"
                """
            }
        }
        always {
            sh 'rm -f /tmp/acendae-fe-deploy.tar.gz'
            cleanWs()
        }
        success {
            echo 'Deployed to staging.acendae.com successfully.'
        }
    }
}
