import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: !isProduction, // No source maps in production
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: !isProduction, // No source maps in production
    },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: './dist',
    }),
  ],
  external: [],
});
