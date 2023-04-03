import { defineConfig } from "vite"
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig({
	// plugins: [viteSingleFile()],
  build: {
    rollupOptions: {
      output: {
        // manualChunks: false,
        inlineDynamicImports: true,
        entryFileNames: '[name].js',   // currently does not work for the legacy bundle
        assetFileNames: '[name].[ext]', // currently does not work for images
      },
    },
    
  }
})