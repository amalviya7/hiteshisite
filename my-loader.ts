export default function cloudinaryLoader({
	src,
	width,
	quality,
  }: {
	src: string
	width: number
	quality?: number
  }) {
	// const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
	// return `http://127.0.0.1:5500/out/${params.join(',')}${src}`
	return `${src}`
  }