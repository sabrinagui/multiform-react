import '../public/assets/v1/css/animate.min.css';
import '../public/assets/v1/css/bootstrap-datepicker.css';
import '../public/assets/v1/css/bootstrap.min.css';
import '../public/assets/v1/css/fontawesome-all.css';

// v1
import '../public/assets/v1/scss/style.scss';
// rtl
// import '../public/assets/v1/rtl/scss/style.scss';

// v2
// import '../public/assets/v2/scss/style.scss';
// rtl
// import '../public/assets/v2/rtl/scss/style.scss';

// v3
// import '../public/assets/v3/scss/style.scss';
// rtl
// import '../public/assets/v3/rtl/scss/style.scss';

import { useEffect } from "react";

function NeonApp({ Component, pageProps }) {
    useEffect(() => {
        require("../public/assets/v1/js/jquery-3.3.1.min.js");
        require("../public/assets/v1/js/jquery.validate.min.js");
        require("../public/assets/v1/js/bootstrap-datepicker.min.js");

        // v1
        require("../public/assets/v1/js/main.js");

        // v2
        // require("../public/assets/v2/js/main.js");

        // v3
        // require("../public/assets/v3/js/main.js");
    }, []);

    return <Component {...pageProps} />
}

export default NeonApp