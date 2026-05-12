import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import { defineConfig } from 'rollup';

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    url({
      include: ['**/*.svg'],
      limit: 0, // Always emit files
      fileName: '[name][extname]',
    }),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: './dist',
    }),
  ],
  external: [
    'react',
    'react-dom',
    'styled-components',
    '@lean-ids/tokens',
    '@ajaysoni7832/lean-ids-tokens',
  ],
});
