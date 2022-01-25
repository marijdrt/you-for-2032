let mix = require('laravel-mix');

mix.options({
  // Don't perform any css url rewriting by default
  processCssUrls: false,
})

mix.postCss("src/css/app.css", "public", [    
  require("tailwindcss"),  
]);