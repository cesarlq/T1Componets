import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { PBIconProps } from '../interfaces/commonInterfaces';

import BannerIcon from '../assets/svg-icons/banner-icon.svg';
import ImageIcon from '@assets/svg-icons/img-icon.svg';
import ImageTextIcon from '@assets/svg-icons/img-text-icon.svg';
import MulticolumnaIcon from '@assets/svg-icons/multicolumna-icon.svg';
import TextBlockIcon from '@assets/svg-icons/text-block-icon.svg';
import FeaturedProductIcon from '@assets/svg-icons/featured-product-icon.svg';
import ProductImgIcon from '@assets/svg-icons/product-img-icon.png';
import ProductListIcon from '@assets/svg-icons/product-list-icon.svg';
import CollectionListIcon from '@assets/svg-icons/collection-list-icon.svg';
import BrandListIcon from '@assets/svg-icons/brand-list-icon.svg';
import MapIcon from '@assets/svg-icons/map-icon.svg';
import ContactFormIcon from '@assets/svg-icons/contact-form-icon.svg';
import VideoIcon from '@assets/svg-icons/video-icon.svg';
import ContentCollapsibleIcon from '@assets/svg-icons/content-collapsible-icon.svg';
import InstagramIcon from '@assets/svg-icons/instagram-icon.svg';

//icons for header and footer
import HeaderIcon from '@assets/svg-icons/header-icon.svg';
import FooterIcon from '@assets/svg-icons/footer-icon.svg';

import CameraOutlinedIcon from '@assets/svg-icons/camera-outlined-icon.svg';
import SearchIconGSVG from '@assets/svg-icons/search-icon-g.svg';
import EyeIcon from '@assets/svg-icons/eye-icon.svg';
import EyeOffIcon from '@assets/svg-icons/eye-off-icon.svg';
import TrashIcon from '@assets/svg-icons/trashcan-icon.svg';
import AutoAwesomeIcon from '@assets/svg-icons/auto-awesome-icon.svg';
import NegritaIcon from '@assets/svg-icons/negrita-icon.svg';
import ItalicIcon from '@assets/svg-icons/italic-icon.svg';
import ArrowUpIcon from '@assets/svg-icons/arrow-up-icon.png';
import ArrowDownIcon from '@assets/svg-icons/arrow-down-icon.png';
import PointsIcon from '@assets/svg-icons/points-icon.svg';
import LinkIcon from '@assets/svg-icons/link-icon.svg';
import ShareIcon from '@assets/svg-icons/share-icon.svg';
import ChevronRightIcon from '@assets/svg-icons/chevron-right-icon.svg';
import MobileIcon from '@assets/svg-icons/mobile-icon.svg';
import PcIcon from '@assets/svg-icons/pc-icon.svg';

import CartShoppingLight from '@assets/svg-icons/iconstyle-selector/cart-shopping-light.svg';
import UserLight from '@assets/svg-icons/iconstyle-selector/user-light.svg';
import CartShoppingThin from '@assets/svg-icons/iconstyle-selector/cart-shopping-thin.svg';
import UserThin from '@assets/svg-icons/iconstyle-selector/user-thin.svg';
import CartShoppingDuotone from '@assets/svg-icons/iconstyle-selector/cart-shopping-duotone.svg';
import UserDuotone from '@assets/svg-icons/iconstyle-selector/user-duotone.svg';
import ChevronDownIcon from '@assets/svg-icons/chevron-down-icon.svg';
import MagnifierIcon from '@assets/svg-icons/magnifier-icon.svg';
import OrderAscIcon from '@assets/svg-icons/order-asc-icon.svg';
import OrderDescIcon from '@assets/svg-icons/order-desc-icon.svg';
import OrderLineIcon from '@assets/svg-icons/order-line-icon.svg';
import CheckboxIcon from '@assets/svg-icons/checkbox-icon.svg';
import UncheckboxIcon from '@assets/svg-icons/uncheckedbox-icon.svg';
import DisabledCheckboxIcon from '@assets/svg-icons/disabled-checkbox-icon.svg';
import PencilLineIcon from "@assets/svg-icons/pencil-icon.svg";
import CheckIcon from "@assets/svg-icons/check-icon.svg";
import CopyIcon from "@assets/svg-icons/copy-icon.svg";
import WariningIconCircle from "@assets/svg-icons/warning-icon.svg";
import CalendarIcon from "@assets/svg-icons/calendar-icon.svg";
import ProductIcon from "@assets/svg-icons/product-icon.svg";
import ProductsIcon from '@assets/menu-icons/products-icon.svg';
import DownloadIcon from "@assets/svg-icons/download-icon.svg";
import DownloadIconGrey from "@assets/svg-icons/download-icon-grey.svg";
import MailIcon from "@assets/svg-icons/mail-icon.svg";
import ClipboardIcon from "@assets/svg-icons/clipboard-icon.svg";
import CommentMoneyIcon from "@assets/svg-icons/comment-money-icon.svg";
import FileIcon from "@assets/svg-icons/file-icon.svg";
import CheckCircleFillIcon from "@assets/svg-icons/check-circle-fill-icon.svg";
import HelpIcon from "@assets/svg-icons/help-icon.svg";
import SettingsIcon from '@assets/menu-icons/settings-icon.svg';
import SearchIcon from '@assets/svg-icons/search-icon-2.svg';
import AiIcon from '@assets/svg-icons/ai-icon.svg';
import AiAltIcon from '@assets/svg-icons/ai-icon-alt.svg';
import ColumnIcon from '@assets/svg-icons/column-icon.svg';
import FilterIcon from "@assets/svg-icons/filter-icon.svg";
import DeliveryTruck from "@assets/svg-icons/delivery-truck.svg";
import CreditCard from "@assets/svg-icons/credit-card.svg";
import CreditCardAlt from "@assets/svg-icons/credit-card-alt.svg";
import UploadIconAlt from "@assets/svg-icons/upload-icon-alt.svg";
import DomainIcon from "@assets/svg-icons/domain.svg";
import BellIcon from "@assets/svg-icons/bell.svg";
import PrivacyLockIcon from "@assets/svg-icons/privacy.svg";
import DeliveryTruckAlt from "@assets/svg-icons/truck.svg";
import AlertIcon from "@assets/svg-icons/alert-icon.svg";
import AlertIconAlt from "@assets/svg-icons/alert-icon-alt.svg";
import ArrowRight from "@assets/svg-icons/arrow-right-icon.svg";
import ArrowUpRight from "@assets/svg-icons/arrow-right-short.svg";
import SwapVertIcon from "@assets/svg-icons/swap-vert-icon.svg";
import ErrorIcon from "@assets/svg-icons/error-icon.svg";
import SmallUserIcon from '@assets/svg-icons/small-user-icon.svg';
import LanguageIcon from '@assets/svg-icons/language-icon.svg';
import PadlockIcon from '@assets/svg-icons/padlock-icon.svg';
import ArrowLeftIcon from '@assets/svg-icons/arrow-left-2.svg';


const T1Icon: React.FC<PBIconProps> = ({ icon, width, height, sx, className }) => {
	const iconMap: { [key: string]: StaticImageData } = {
		genericIcon: BannerIcon,   // default icon  // cambiar
		bannerSection: BannerIcon,
		imageSection: ImageIcon,
		imageTextSection: ImageTextIcon,
		multicolumnSection: MulticolumnaIcon,
		multicolumnCarouselSection: MulticolumnaIcon,
		textSection: TextBlockIcon,
		featuredProductSection: FeaturedProductIcon,
		productImageSection: ProductImgIcon,
		productListSection: ProductListIcon,
		productCarouselSection: ProductListIcon,
		collectionListSection: CollectionListIcon,
		brandListSection: BrandListIcon,
		mapSection: MapIcon,
		contactFormSection: ContactFormIcon,
		videoSection: VideoIcon,
		collapseContentSection: ContentCollapsibleIcon,
		instagramFeedSection: InstagramIcon,

		//icons for header and footer
		headerIcon: HeaderIcon,
		footerIcon: FooterIcon,

		//other icons
		cameraOutlinedIcon: CameraOutlinedIcon,
		searchIconGSVG: SearchIconGSVG,
		eyeIcon: EyeIcon,
		eyeOffIcon: EyeOffIcon,
		trashIcon: TrashIcon,
		autoAwesomeIcon: AutoAwesomeIcon,
		negritaIcon: NegritaIcon,
		italicIcon: ItalicIcon,
		arrowUpIcon: ArrowUpIcon,
		arrowDownIcon: ArrowDownIcon,
		pointsIcon: PointsIcon,
		linkIcon: LinkIcon,
		shareIcon: ShareIcon,
		chevronRightIcon: ChevronRightIcon,
		mobileIcon: MobileIcon,
		pcIcon: PcIcon,
		chevronDownIcon: ChevronDownIcon,
		magnifierIcon: MagnifierIcon,
		orderAscIcon: OrderAscIcon,
		orderDescIcon: OrderDescIcon,
		orderLineIcon: OrderLineIcon,
		pencilLineIcon: PencilLineIcon,
		productIcon: ProductIcon,
		productsIcon: ProductsIcon,

		//for icon style selector
		cartShoppingLight: CartShoppingLight,
		userLight: UserLight,
		cartShoppingThin: CartShoppingThin,
		userThin: UserThin,
		cartShoppingDuotone: CartShoppingDuotone,
		userDuotone: UserDuotone,
		checkboxIcon: CheckboxIcon,
		uncheckboxIcon: UncheckboxIcon,
		disabledCheckboxIcon: DisabledCheckboxIcon,
		checkIcon: CheckIcon,
		copyIcon: CopyIcon,
		warningIconCircle: WariningIconCircle,
		calendarIcon: CalendarIcon,
		downloadIcon: DownloadIcon,
		mailIcon: MailIcon,
		clipboardIcon: ClipboardIcon,
		commentMoneyIcon: CommentMoneyIcon,
		fileIcon: FileIcon,
		checkCircleFillIcon: CheckCircleFillIcon,
		downloadIconGrey: DownloadIconGrey,
		helpIcon: HelpIcon,
		settingsIcon: SettingsIcon,
		searchIcon: SearchIcon,
		aiIcon: AiIcon,
		aiAltIcon: AiAltIcon,
		columnIcon: ColumnIcon,
		filterIcon: FilterIcon,
		deliveryTruck: DeliveryTruck,
		creditCard: CreditCard,
		uploadIconAlt: UploadIconAlt,
		domainIcon: DomainIcon,
		bellIcon: BellIcon,
		privacyLockIcon: PrivacyLockIcon,
		creditCardAlt: CreditCardAlt,
		deliveryTruckAlt: DeliveryTruckAlt,
		alertIconAlt: AlertIconAlt,
		alertIcon: AlertIcon,
		arrowRight: ArrowRight,
		arrowUpRight: ArrowUpRight,
		swapVertIcon: SwapVertIcon,
		errorIcon: ErrorIcon,
		smallUserIcon: SmallUserIcon,
		languageIcon: LanguageIcon,
		padlockIcon: PadlockIcon,
		arrowLeft: ArrowLeftIcon
	};

	const iconSrc = iconMap[icon] || BannerIcon;
	return (
		<Image src={iconSrc} alt="Icon" width={width || 20} height={height || 20} style={sx} className={className} />
	);
};

export default T1Icon;