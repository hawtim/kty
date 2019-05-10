const source = tinify.fromFile("large.jpg");
const copyrighted = source.preserve("copyright", "creation");
copyrighted.toFile("optimized-copyright.jpg");