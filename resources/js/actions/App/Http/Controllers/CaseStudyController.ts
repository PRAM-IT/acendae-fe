import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CaseStudyController::index
* @see app/Http/Controllers/CaseStudyController.php:13
* @route '/projects'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/projects',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CaseStudyController::index
* @see app/Http/Controllers/CaseStudyController.php:13
* @route '/projects'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CaseStudyController::index
* @see app/Http/Controllers/CaseStudyController.php:13
* @route '/projects'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CaseStudyController::index
* @see app/Http/Controllers/CaseStudyController.php:13
* @route '/projects'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CaseStudyController::show
* @see app/Http/Controllers/CaseStudyController.php:19
* @route '/projects/{caseStudy}'
*/
export const show = (args: { caseStudy: string | { slug: string } } | [caseStudy: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/projects/{caseStudy}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CaseStudyController::show
* @see app/Http/Controllers/CaseStudyController.php:19
* @route '/projects/{caseStudy}'
*/
show.url = (args: { caseStudy: string | { slug: string } } | [caseStudy: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { caseStudy: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { caseStudy: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            caseStudy: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        caseStudy: typeof args.caseStudy === 'object'
        ? args.caseStudy.slug
        : args.caseStudy,
    }

    return show.definition.url
            .replace('{caseStudy}', parsedArgs.caseStudy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CaseStudyController::show
* @see app/Http/Controllers/CaseStudyController.php:19
* @route '/projects/{caseStudy}'
*/
show.get = (args: { caseStudy: string | { slug: string } } | [caseStudy: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CaseStudyController::show
* @see app/Http/Controllers/CaseStudyController.php:19
* @route '/projects/{caseStudy}'
*/
show.head = (args: { caseStudy: string | { slug: string } } | [caseStudy: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

const CaseStudyController = { index, show }

export default CaseStudyController