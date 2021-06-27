<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Chi][chi-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [chi][chi-distribution] random variable is

<!-- <equation class="equation" label="eq:chi_chi_cdf" align="center" raw="F(x;\,k) = P\left(k/2,x^{2}/2\right)" alt="Cumulative distribution function for a chi distribution."> -->

<div class="equation" align="center" data-raw-text="F(x;\,k) = P\left(k/2,x^{2}/2\right)" data-equation="eq:chi_chi_cdf">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/stats/base/dists/chi/cdf/docs/img/equation_chi_chi_cdf.svg" alt="Cumulative distribution function for a chi distribution.">
    <br>
</div>

<!-- </equation> -->

where `k` is the degrees of freedom and `P` is the lower regularized incomplete gamma function.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-chi-cdf
```

</section>

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats-base-dists-chi-cdf' );
```

#### cdf( x, k )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [chi][chi-distribution] distribution with degrees of freedom `k`.

```javascript
var y = cdf( 2.0, 1.0 );
// returns ~0.954

y = cdf( 2.0, 3.0 );
// returns ~0.739

y = cdf( 1.0, 0.5 );
// returns ~0.846

y = cdf( -1.0, 2.0 );
// returns 0.0

y = cdf( -Infinity, 4.0 );
// returns 0.0

y = cdf( +Infinity, 4.0 );
// returns 1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 1.0 );
// returns NaN

y = cdf( 0.0, NaN );
// returns NaN
```

If provided `k < 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -2.0 );
// returns NaN
```

If provided `k = 0`, the function evaluates the [CDF][cdf] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = cdf( 2.0, 0.0 );
// returns 1.0

y = cdf( -2.0, 0.0 );
// returns 0.0

y = cdf( 0.0, 0.0 );
// returns 1.0
```

#### cdf.factory( k )

Returns a function for evaluating the [cumulative distribution function][cdf] for a [chi][chi-distribution] distribution with degrees of freedom `k`.

```javascript
var mycdf = cdf.factory( 3.0 );

var y = mycdf( 6.0 );
// returns ~1.0

y = mycdf( 1.5 );
// returns ~0.478
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var cdf = require( '@stdlib/stats-base-dists-chi-cdf' );

var k;
var x;
var y;
var i;

for ( i = 0; i < 20; i++ ) {
    x = randu() * 10.0;
    k = round( randu()*5.0 );
    y = cdf( x, k );
    console.log( 'x: %d, k: %d, F(x;k): %d', x.toFixed( 4 ), k.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-chi-cdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-chi-cdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-chi-cdf/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-chi-cdf/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-chi-cdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-chi-cdf?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-chi-cdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-chi-cdf/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-chi-cdf/main/LICENSE

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[chi-distribution]: https://en.wikipedia.org/wiki/Chi_distribution

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
