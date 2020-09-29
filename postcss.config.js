module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        // require('@fullhuman/postcss-purgecss')({
        //     content: [
        //         './public/build/*.html',
        //     ],
        //     defaultExtractor: content => content.match(/[A-za-z0-9-_:]+/g) || []
        // })
    ]
}