import styles from '../../styles/common/BalanceBanner.module.scss';
import WalletIcon from '../../assets/wallet-icon.svg';
import Link from 'next/link';
import Image from 'next/image';
import { numberFormatWithoutRound } from '@/util/dataFormat';
import ArrowMenu from '../../assets/arrow-menu.svg';
import React from 'react';
import { BalanceBannerI } from '@/interfaces/commonInterfaces';

export default function BalanceBanner({ className, balance, BALLANCE_PATH }: BalanceBannerI) {

    return (
        <Link href={BALLANCE_PATH} legacyBehavior>
            <a
                className={`${styles['balance-container']} ${className}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <WalletIcon />
                <span className={styles.balance}>
                    $ {numberFormatWithoutRound((balance && balance.monto_actual) || 0)}
                </span>
                <ArrowMenu />
            </a>
        </Link>
    );
}