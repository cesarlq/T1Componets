import styles from '@/styles/common/BalanceBanner.module.scss';
import WalletIcon from '@/assets/wallet-icon.svg';
import Link from 'next/link';
import Image from 'next/image';
import { numberFormatWithoutRound } from '@/util/dataFormat';
import ArrowMenu from '@/assets/arrow-menu.svg';
import React from 'react';
import { BalanceBannerI } from '@/interfaces/commonInterfaces';

export default function BalanceBanner({ className, balance, BALLANCE_PATH }: BalanceBannerI) {

   
    return (
        <Link
            className={`${styles['balance-container']} ${className}`}
            href={BALLANCE_PATH}
        >
            <Image
                src={WalletIcon}
                alt='wallet'
                className={styles['wallet-icon']}
            />
            <span className={styles.balance}>
                $ {numberFormatWithoutRound((balance && balance.monto_actual) || 0)}
            </span>
            <Image
                src={ArrowMenu}
                alt='arrow'
                className={styles.arrow}
            />
        </Link>
    );
}