// /** @type {import('next').NextConfig} */


// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     unoptimized: true,
//   },
//   trailingSlash: true,
//   output: "standalone",
// };

// // eslint-disable-next-line no-undef
// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const routes = async function() {
	return {
	}
}
const nextConfig = {
	output: 'export',
	images: {
		loader: 'custom',
		loaderFile: './my-loader.ts',
	},
	trailingSlash: true,
	// assetPrefix: '/',
	// assetPrefix: '/build',
	distDir: 'build',
	generateStaticParams: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
			'/': { page: '/' }, // Index page
			// '/404': { page: '/[...not-found]' }, // Blog page
			'/blog/Tapping-into-the-Potential-of-AI-in-Healthcare': { page: '/blog/[innerblog]' }, // Blog page
    }
  },
}

module.exports = nextConfig

