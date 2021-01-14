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
       <title>CPA Near Me - Top Rated CPAs serving your state.</title>
        <link rel="canonical" href="http://CPANearMe.org/" />
        <meta name="robots" content="index, follow"/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta> 
        <meta name="description" content="Free In depth recommendations for CPAs and Tax Attorneys. Find your next accountant. "/>
            </Head>
            <body>
       
            <Main/>
            </body>
            <NextScript/>
        </Html>
        )}
}