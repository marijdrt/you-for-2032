let mix = require('laravel-mix');

mix.postCss("src/css/app.css", "public", [    
  require("tailwindcss"),  
]);