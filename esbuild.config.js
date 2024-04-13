import * as esbuild from 'esbuild';

// bundle
await esbuild.build({
    entryPoints: ['index.js'],
    bundle: true,
    platform: 'browser',
    outfile: 'dist/plist.js',
    sourcemap: true,
    target: ''
});

// parse
await esbuild.build({
    entryPoints: ['lib/parse.js'],
    bundle: true,
    platform: 'browser',
    outfile: 'dist/plist-parse.js',
    sourcemap: true,
    target: ''
});
 
// build
await esbuild.build({
    entryPoints: ['lib/build.js'],
    bundle: true,
    platform: 'browser',
    outfile: 'dist/plist-build.js',
    sourcemap: true,
    target: ''
});