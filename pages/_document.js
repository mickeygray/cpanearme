import Document, {Html, Head, Main , NextScript} from 'next/document'
import StickyNavbar from '../components/StickyNavbar'

export default class CustomDocument extends Document {
    render() {
        return (
        <Html>
            <Head>
    <script
      src="https://kit.fontawesome.com/39d46c8b9a.js"
      crossOrigin="anonymous"
    ></script>
            </Head>
            <body>
       
            <Main/>
            </body>
            <NextScript/>
        </Html>
        )}
}