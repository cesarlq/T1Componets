import * as React from "react";
import { SVGProps } from "react";
const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} {...props}>
        <path
            fill="#4A4A4A"
            fillRule="evenodd"
            d="M4.565 1.264a.7.7 0 0 0-.99 0L2.102 2.737a3.561 3.561 0 0 0-.724 3.992 19.923 19.923 0 0 0 9.893 9.893 3.561 3.561 0 0 0 3.992-.724l1.473-1.473a.7.7 0 0 0 0-.99l-1.981-1.981a.7.7 0 0 0-.808-.132l-1.1.55c-1.15.575-2.54.35-3.45-.56l-2.71-2.71a2.988 2.988 0 0 1-.56-3.449l.55-1.1a.7.7 0 0 0-.13-.808L4.565 1.264zM2.826.515a1.759 1.759 0 0 1 2.488 0l1.981 1.982c.536.535.668 1.353.33 2.03l-.55 1.1a1.93 1.93 0 0 0 .361 2.227l2.71 2.71a1.93 1.93 0 0 0 2.227.361l1.1-.55a1.76 1.76 0 0 1 2.03.33l1.982 1.981a1.76 1.76 0 0 1 0 2.488l-1.473 1.473a4.62 4.62 0 0 1-5.179.939c-4.618-2.1-8.32-5.8-10.419-10.42a4.62 4.62 0 0 1 .94-5.178L2.825.515z"
        />
    </svg>
);
export default PhoneIcon;
