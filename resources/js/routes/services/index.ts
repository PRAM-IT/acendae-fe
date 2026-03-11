import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ServicesController::index
* @see app/Http/Controllers/ServicesController.php:12
* @route '/services'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServicesController::index
* @see app/Http/Controllers/ServicesController.php:12
* @route '/services'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServicesController::index
* @see app/Http/Controllers/ServicesController.php:12
* @route '/services'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServicesController::index
* @see app/Http/Controllers/ServicesController.php:12
* @route '/services'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServicesController::outsource
* @see app/Http/Controllers/ServicesController.php:17
* @route '/services/outsource'
*/
export const outsource = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: outsource.url(options),
    method: 'get',
})

outsource.definition = {
    methods: ["get","head"],
    url: '/services/outsource',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServicesController::outsource
* @see app/Http/Controllers/ServicesController.php:17
* @route '/services/outsource'
*/
outsource.url = (options?: RouteQueryOptions) => {
    return outsource.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServicesController::outsource
* @see app/Http/Controllers/ServicesController.php:17
* @route '/services/outsource'
*/
outsource.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: outsource.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServicesController::outsource
* @see app/Http/Controllers/ServicesController.php:17
* @route '/services/outsource'
*/
outsource.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: outsource.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServicesController::dedicatedTeam
* @see app/Http/Controllers/ServicesController.php:22
* @route '/services/dedicated-team'
*/
export const dedicatedTeam = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dedicatedTeam.url(options),
    method: 'get',
})

dedicatedTeam.definition = {
    methods: ["get","head"],
    url: '/services/dedicated-team',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServicesController::dedicatedTeam
* @see app/Http/Controllers/ServicesController.php:22
* @route '/services/dedicated-team'
*/
dedicatedTeam.url = (options?: RouteQueryOptions) => {
    return dedicatedTeam.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServicesController::dedicatedTeam
* @see app/Http/Controllers/ServicesController.php:22
* @route '/services/dedicated-team'
*/
dedicatedTeam.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dedicatedTeam.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServicesController::dedicatedTeam
* @see app/Http/Controllers/ServicesController.php:22
* @route '/services/dedicated-team'
*/
dedicatedTeam.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dedicatedTeam.url(options),
    method: 'head',
})

const services = {
    index: Object.assign(index, index),
    outsource: Object.assign(outsource, outsource),
    dedicatedTeam: Object.assign(dedicatedTeam, dedicatedTeam),
}

export default services