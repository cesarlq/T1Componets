import React from 'react';
import { PBIconProps } from '../interfaces/commonInterfaces';

// Usar img nativo en lugar de Next/Image para mayor compatibilidad
const T1Icon: React.FC<PBIconProps> = ({ icon, width, height, sx, className }) => {
	const iconMap: { [key: string]: string } = {
		genericIcon: '/t1-assets/banner-icon.svg',
		bannerSection: '/t1-assets/banner-icon.svg',
		imageSection: '/t1-assets/img-icon.svg',
		imageTextSection: '/t1-assets/img-text-icon.svg',
		multicolumnSection: '/t1-assets/multicolumna-icon.svg',
		multicolumnCarouselSection: '/t1-assets/multicolumna-icon.svg',
		textSection: '/t1-assets/text-block-icon.svg',
		featuredProductSection: '/t1-assets/featured-product-icon.svg',
		productListSection: '/t1-assets/product-list-icon.svg',
		productCarouselSection: '/t1-assets/product-list-icon.svg',
		collectionListSection: '/t1-assets/collection-list-icon.svg',
		brandListSection: '/t1-assets/brand-list-icon.svg',
		mapSection: '/t1-assets/map-icon.svg',
		contactFormSection: '/t1-assets/contact-form-icon.svg',
		videoSection: '/t1-assets/video-icon.svg',
		collapseContentSection: '/t1-assets/content-collapsible-icon.svg',
		instagramFeedSection: '/t1-assets/instagram-icon.svg',

		//icons for header and footer
		headerIcon: '/t1-assets/header-icon.svg',
		footerIcon: '/t1-assets/footer-icon.svg',

		//other icons
		cameraOutlinedIcon: '/t1-assets/camera-outlined-icon.svg',
		searchIconGSVG: '/t1-assets/search-icon-g.svg',
		eyeIcon: '/t1-assets/eye-icon.svg',
		eyeOffIcon: '/t1-assets/eye-off-icon.svg',
		trashIcon: '/t1-assets/trashcan-icon.svg',
		autoAwesomeIcon: '/t1-assets/auto-awesome-icon.svg',
		negritaIcon: '/t1-assets/negrita-icon.svg',
		italicIcon: '/t1-assets/italic-icon.svg',
		pointsIcon: '/t1-assets/points-icon.svg',
		linkIcon: '/t1-assets/link-icon.svg',
		shareIcon: '/t1-assets/share-icon.svg',
		chevronRightIcon: '/t1-assets/chevron-right-icon.svg',
		mobileIcon: '/t1-assets/mobile-icon.svg',
		pcIcon: '/t1-assets/pc-icon.svg',
		chevronDownIcon: '/t1-assets/chevron-down-icon.svg',
		magnifierIcon: '/t1-assets/magnifier-icon.svg',
		orderAscIcon: '/t1-assets/order-asc-icon.svg',
		orderDescIcon: '/t1-assets/order-desc-icon.svg',
		orderLineIcon: '/t1-assets/order-line-icon.svg',
		pencilLineIcon: '/t1-assets/pencil-icon.svg',
		productIcon: '/t1-assets/product-icon.svg',
		productsIcon: '/t1-assets/products-icon.svg',

		//for icon style selector
		cartShoppingLight: '/t1-assets/cart-shopping-light.svg',
		userLight: '/t1-assets/user-light.svg',
		cartShoppingThin: '/t1-assets/cart-shopping-thin.svg',
		userThin: '/t1-assets/user-thin.svg',
		cartShoppingDuotone: '/t1-assets/cart-shopping-duotone.svg',
		userDuotone: '/t1-assets/user-duotone.svg',
		checkboxIcon: '/t1-assets/checkbox-icon.svg',
		uncheckboxIcon: '/t1-assets/uncheckedbox-icon.svg',
		disabledCheckboxIcon: '/t1-assets/disabled-checkbox-icon.svg',
		checkIcon: '/t1-assets/check-icon.svg',
		copyIcon: '/t1-assets/copy-icon.svg',
		warningIconCircle: '/t1-assets/warning-icon.svg',
		calendarIcon: '/t1-assets/calendar-icon.svg',
		downloadIcon: '/t1-assets/download-icon.svg',
		mailIcon: '/t1-assets/mail-icon.svg',
		clipboardIcon: '/t1-assets/clipboard-icon.svg',
		commentMoneyIcon: '/t1-assets/comment-money-icon.svg',
		fileIcon: '/t1-assets/file-icon.svg',
		checkCircleFillIcon: '/t1-assets/check-circle-fill-icon.svg',
		downloadIconGrey: '/t1-assets/download-icon-grey.svg',
		helpIcon: '/t1-assets/help-icon.svg',
		settingsIcon: '/t1-assets/settings-icon.svg',
		searchIcon: '/t1-assets/search-icon-2.svg',
		aiIcon: '/t1-assets/ai-icon.svg',
		aiAltIcon: '/t1-assets/ai-icon-alt.svg',
		columnIcon: '/t1-assets/column-icon.svg',
		filterIcon: '/t1-assets/filter-icon.svg',
		deliveryTruck: '/t1-assets/delivery-truck.svg',
		creditCard: '/t1-assets/credit-card.svg',
		uploadIconAlt: '/t1-assets/upload-icon-alt.svg',
		domainIcon: '/t1-assets/domain.svg',
		bellIcon: '/t1-assets/bell.svg',
		privacyLockIcon: '/t1-assets/privacy.svg',
		creditCardAlt: '/t1-assets/credit-card-alt.svg',
		deliveryTruckAlt: '/t1-assets/truck.svg',
		alertIconAlt: '/t1-assets/alert-icon-alt.svg',
		alertIcon: '/t1-assets/alert-icon.svg',
		arrowRight: '/t1-assets/arrow-right-icon.svg',
		arrowUpRight: '/t1-assets/arrow-right-short.svg',
		swapVertIcon: '/t1-assets/swap-vert-icon.svg',
		errorIcon: '/t1-assets/error-icon.svg',
		smallUserIcon: '/t1-assets/small-user-icon.svg',
		languageIcon: '/t1-assets/language-icon.svg',
		padlockIcon: '/t1-assets/padlock-icon.svg',
		arrowLeft: '/t1-assets/arrow-left-2.svg',
		menuInActive: '/t1-assets/menu-inactive.svg',
	};

	const iconSrc = iconMap[icon] || '/t1-assets/banner-icon.svg';
	
	// Usar img nativo para mejor compatibilidad
	return (
		<img 
			src={iconSrc} 
			alt="Icon" 
			width={width || 20} 
			height={height || 20} 
			style={sx} 
			className={className}
			onError={(e) => {
				console.warn(`Failed to load icon: ${iconSrc}`);
				// Fallback a un icono por defecto o esconder
				e.currentTarget.style.display = 'none';
			}}
		/>
	);
};

export default T1Icon;