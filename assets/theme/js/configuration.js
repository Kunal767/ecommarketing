var headerText = "Start your own business with Ecom Marketing.";
var startupText = "Blending code with creativity, our web development and ad agency crafts digital masterpieces that captivate, convert, and conquer the online realm.";
var contactLink = "https://www.instagram.com/ecom_marketing24/";


var services = [
    {
        "name": "Shopify Store",
        "icon": "fa-brands fa-shopify eicon",
        "description": "The platform is designed to provide a seamless and user-friendly experience for both store owners and customers.",
        "price": "11999",
        "color_class": "shopify-wrapper",
        "animation": "assets/animations/shopify-animation.json",
        "features": ["Store Creation with unlimited Pages.", "Premium theme for store.", "50 Products Upload.", "Payment Gateway Setup."]
    },
    {
        "name": "Meta Ads",
        "icon": "fa-brands fa-meta eicon",
        "description": "A powerful and widely used advertising tool that allows businesses and individuals to promote their products, services, or content on the world wide.",
        "price": "19999",
        "color_class": "meta-wrapper",
        "animation": "assets/animations/meta-ads-animation.json",
        "features": ["Ads management.", "High Quality Creatives for Ads.", "Running multiple Effective and quality campaigns strategically.", "Optimization of campaigns and targeting the right audience andgenerating quality leads/ sales."]
    },
    {
        "name": "Wordpress Store",
        "icon": "fa-brands fa-wordpress eicon",
        "description": "WordPress stores provide a wide range of possibilities for entrepreneurs, small businesses, and even large enterprises to sell products or services online.",
        "price": "19999",
        "color_class": "wordpress-wrapper",
        "animation": "assets/animations/wordpress-animation.json",
        "features": ["Free Hosting with Domain for 1 year.", "Ecommerce website ,Multivendor website,Static website.", "Premium Theme.", "Products Upload 50.", "Daily Backup."]
    },
    {
        "name": "Dropshipping",
        "icon": "fa-brands fa-dropbox eicon",
        "description": "When a store sells a product using the dropshipping model, it purchases the item from a third party and has it shipped directly to the customer.",
        "price": "13999",
        "color_class": "dropship-wrapper",
        "animation": "assets/animations/dropshipping-animation.json",
        "features": ["Store Creation with connectivity to Roposo Dropshipping.", "High Quality Creatives for Ads.", "Running multiple Effective and quality campaigns strategically with 50 Products", "Optimization of campaigns and targeting the right audience andgenerating quality sales."]
    },
    {
        "name": "International Dropshipping",
        "icon": "fa-solid fa-earth-asia eicon",
        "description": "Sourcing products from suppliers located in different countries, allowing merchants to reach customers across the globe.",
        "price": "29999",
        "color_class": "international-dropship-wrapper",
        "animation": "assets/animations/international-dropshipping-animation.json",
        "features": ["Store Creation with connectivity to CJ Dropshipping.", "High Quality Creatives for Ads.", "Running multiple Effective and quality campaigns strategically with 50 Products", "Optimization of campaigns and targeting the right audience andgenerating quality sales."]
    },
    {
        "name": "Google Ads",
        "icon": "fa-brands fa-google eicon",
        "description": "It allows businesses, advertisers, and individuals to display their ads on Google's search engine results pages (SERPs),websites and apps.",
        "price": "24999",
        "color_class": "google-wrapper",
        "animation": "assets/animations/google-ads-animation.json",
        "features": ["Ads management.", "High Quality Creatives for Ads.", "Running multiple Effective and quality campaigns strategically.", "Optimization of campaigns and targeting the right audience andgenerating quality leads/ sales."]
    },
    {
        "name": "Social Media Marketing",
        "icon": "fa-solid fa-hashtag eicon",
        "description": "Social media marketing is a dynamic and influential component of the modern digital marketing landscape.",
        "price": "14999",
        "color_class": "social-media-marketing-wrapper",
        "animation": "assets/animations/social-media-marketing-animation.json",
        "features": ["Advertising", "Content Creation", "Profile optimization", "Audience Targeting", "Analytics and Insights", "Community Engagement"]
    },
    {
        "name": "Affiliate Marketing",
        "icon": "fa-solid fa-link eicon",
        "description": "It is a process where publishers earn a commission by using an affiliate link to promote a product or service made by another retailer or advertiser.",
        "price": "9999",
        "color_class": "affiliate-marketing-wrapper",
        "animation": "assets/animations/affiliate-marketing-animation.json",
        "features": ["Refersion", "Tapfiliate", "Action Plan", "Website Audit", "Number of Keywords Researched 22", "Number of Competitors Researched 6"]
    },
    {
        "name": "Wix Development",
        "icon": "fa-brands fa-wix eicon",
        "description": "The Wix website builder offers a complete solution from enterprise-grade infrastructure and business features to advanced SEO and marketing tools.",
        "price": "22999",
        "color_class": "wix-development-wrapper",
        "animation": "assets/animations/wix-animation.json",
        "features": ["Content Upload", "Responsive Design", "Design Customization", "eCommerce Functionality", "Number of Products upload 50", "Number of Plugins/Extensions Installed 20"]
    },
    {
        "name": "Product Listing",
        "icon": "fa-solid fa-list eicon",
        "description": "Listing your products on various market-place like Amazon, Flipkart and meesho without facing any plenty.",
        "price": "9999",
        "color_class": "product-listing-wrapper",
        "animation": "assets/animations/product-listing-animation.json",
        "features": ["Meta Description", "Title Optimization", "Number of Products 50", "Number of Words Per Description 180", "Number of Meta Tags / Keywords of Optimized 3"]
    }
]

var terms_and_conditions = {
    "1. Introduction": "Welcome to Ecom Digital Marketing Agency! These Terms and Policies govern your use of our services, website, and any interactions with our agency. By using our services, you agree to comply with these terms and policies. If you do not agree, please refrain from using our services.",
    "2. Services": "Ecom Digital Marketing Agency provides digital marketing services, including but not limited to Facebook Marketing, Google Ads, search engine optimization (SEO), social media marketing, pay-per-click advertising (PPC), content marketing, and website development on Shopify, WordPress, and HTML/CSS.",
    "3. Confidentiality": "We respect the confidentiality of your information. Any information shared with us, including business strategies, customer data, and proprietary information, will be kept confidential and used solely for the purpose of providing our services.",
    "4. Payments Policy": "NO REFUND will be given by the company. Failure to make payments may result in the suspension of services or the company can take your Business Manager or website Access until they get payment for their services. Also, Ecom Marketing Agency is not responsible for your Ads Funds which will be used for your ads or marketing. Payment Done will be considered only on UPI ID-7982119648@paytm or Bank Transfer on Beneficiaries(BHARAT). If you are paying service charges on another account then Ecom marketing is not responsible for your work and payment.",
    "5. Intellectual Property": "Any intellectual property created during the course of our services, such as content, graphics, or software, may be subject to licensing agreements or ownership rights as specified in our contract. Unauthorized use or reproduction of our intellectual property is prohibited.",
    "6. Termination": "Either party may terminate our services with written notice, subject to the terms outlined in our agreement. Upon termination, any outstanding fees and intellectual property rights will be addressed according to the terms of the contract.",
    "7. Privacy Policy": "Our Privacy Policy governs the collection, use, and protection of your personal information. Please review our Privacy Policy separately for more details",
    "8. Disclaimer": "We make every effort to provide accurate and effective digital marketing services, but we cannot guarantee specific results or outcomes. The success of our services may depend on various factors beyond our control.",
    "9. Limitation of Liability": "Ecom Digital Marketing Agency shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the use of our services, website, or any content provided.",
    "10. Changes to Terms and Policies": "We reserve the right to update and modify these terms and policies at any time. Changes will be posted on our website, and it is your responsibility to review them periodically.",
    "11. Contact Information": "If you have any questions or concerns regarding these terms and policies, please contact us at: Ecom Digital Marketing Agency [+91- 9310926064] Address - F-441 Punjabi bagh new delhi. By using our services, You agree to these Terms and Policies because the company will not be responsible for informing you about policies and terms, you have to read all the terms from our website and then be ready to start work with us."
}

var allterms = document.getElementById('allterms');

if(allterms != null){
    for (const [key, value] of Object.entries(terms_and_conditions)) {
        var termer = `
        <p class="mbr-text mbr-fonts-style display-7 text-dark">${key}</p>
        <p class="mbr-text mbr-fonts-style display-8">${value}</p>
        `
        allterms.innerHTML+=termer;
    }
    lottie.loadAnimation({
        container: document.getElementById(`terms-anim`),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/animations/terms-animation.json'
    });
}



document.getElementById('startupText').innerHTML = startupText;
document.getElementById('headerText').innerHTML = headerText;

allcontactelements = document.getElementsByClassName('contactlinker');
for (let index = 0; index < allcontactelements.length; index++) {
    const element = allcontactelements[index];
    element.setAttribute('href', contactLink);

}

var servicesContainer = document.getElementById('allservices');
var allPricingPackages = document.getElementById('pricing-packages-all');

var insideRow = `<div class="row services-row">`;
var rowFullIndex = 0;

if(servicesContainer != null){
    for (let i = 0; i < services.length; i++) {
        const service = services[i];
    
        // pricing packages
        var featureHolder = "";
    
        service.features.forEach(serviceFeature => {
            featureHolder += `<p class="text-center">• ${serviceFeature}</p>`
        });
    
        var insiderservice = `
        <div class="col-12 col-md-6 col-lg-4 item gallery-image">
            <div class="item-wrapper" id="${service.color_class}"></div>
            <h6 class="mbr-item-subtitle mbr-fonts-style display-7 text-center"><strong>${service.name}</strong></h6>
            <div class="descr mbr-fonts-style display-4 w-75 m-auto">${featureHolder}</div>
            <h4 class="mbr-section-subtitle mbr-fonts-style display-4 text-center pricing">₹ ${service.price}</h4>
        </div>
        `
    
        allPricingPackages.innerHTML += insiderservice;
    
        if (rowFullIndex == 3) {
            rowFullIndex = 0;
            insideRow += "</div>";
            servicesContainer.innerHTML += insideRow;
            insideRow = `<div class="row services-row">`;
        }
    
        var servicehtml = `
        <div class="col-12 col-md-6 item col-lg-4">
            <div class="card_wrapper text-center">
                <div class="icon_block">
                    <div class="iconfont-wrapper ${service.color_class}">
                        <i class="${service.icon}"></i>
                        <div class="shape_1 shape"></div>
                        <div class="shape_2 shape"></div>
                        <div class="shape_3 shape"></div>
                        <div class="shape_4 shape"></div>
                    </div>
                </div>
                <h5 class="card_title mbr-fonts-style display-7"><strong>${service.name}</strong></h5>
                <p class="card_text mbr-fonts-style display-4">${service.description}</p>
            </div>
        </div>
        `
    
        insideRow += servicehtml;
        rowFullIndex++;
    
        if (i == services.length - 1) {
            console.log(service.name)
            insideRow += "</div>";
            servicesContainer.innerHTML += insideRow;
        }
    
    }
    
    services.forEach(animationData => {
        lottie.loadAnimation({
            container: document.getElementById(`${animationData.color_class}`),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: `${animationData.animation}`
        });
    });

    lottie.loadAnimation({
        container: document.getElementById(`let-us-do-work-anim`),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/animations/trust-us-anim.json'
    });
    
    lottie.loadAnimation({
        container: document.getElementById(`quality-content-at-good-price`),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/animations/quality-content-animation.json'
    });

    lottie.loadAnimation({
        container: document.getElementById(`about-us-anim`),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/animations/about-us-animation.json'
    });
}
