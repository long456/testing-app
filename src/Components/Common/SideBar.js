import React from "react";
import { Menu } from "antd";

const menuData = [
    {
        label: 'Home',
        key: 'home'
    },
    {
        label: 'Contract',
        key: 'contract',
        children : [
            {
                label: 'Contract list',
                key: 'contractList'
            },
            {
                label: 'Create new contract',
                key: 'createNewContract'
            },
            {
                label: 'Approve contract',
                key: 'approveContract'
            },
            {   
                label: 'Approve user',
                key: 'approveUser'
            },
            {
                label: 'Unblock contract',
                key: 'unblockContract'
            },
            {
                label: 'Unblock user',
                key: 'unblockUser'
            },
            {
                label: 'Reset pin/ password',
                key: 'resetPinPassword'
            },
        ]
    },
    {
        label: 'Fee management',
        key: 'feeManagement',
        children : [
            {
                label: 'Set fee',
                key: 'setFee'
            },
            {
                label: 'Transaction fee ',
                key: 'transactionFee ',
                children : [
                    {
                        label: 'Product fee',
                        key: 'productFee'
                    },
                    {
                        label: 'Contract fee',
                        key: 'contractFee'
                    },
                    {
                        label: 'OTC fee',
                        key: 'otcFee'
                    },
                ]
            },
            {
                label: 'Set fee share',
                key: 'setFeeShare'
            },
        ]
    },
    {
        label: 'Limit management',
        key: 'limitManagement',
        children: [
            {
                label: 'Product limit',
                key: 'productlimit'
            },
            {
                label: 'Contract limit',
                key: 'contractlimit    '
            },
            {
                label: 'Wallet balance limit',
                key: 'walletBalanceLimit'
            },
        ]
    },
    {
        label: 'Transaction',
        key: 'transaction',
        children : [
            {
                label: 'Transaction history',
                key: 'transactionHistory'
            },
            {
                label: 'Top Up to E-wallet',
                key: 'topUpToEWallet'
            },
            {
                label: 'Withdrawal from E-wallet',
                key: 'withdrawalFromEWallet'
            },
            {   
                label: 'Cash back ',
                key: 'cashBack '
            },
            {
                label: 'Payroll',
                key: 'payroll '
            },
            {
                label: 'Admin transaction',
                key: 'Admin transaction'
            },
            {
                label: 'Reversal transaction',
                key: 'Reversal transaction'
            },
        ]
    },
    {
        label: 'System',
        key: 'system',
        children : [
            {
                label: 'Group management',
                key: 'Group management'
            },
            {
                label: 'User management',
                key: 'User management'
            },
            {
                label: 'System parameter',
                key: 'System parameter'
            },
        ]
    },
    {
        label: 'Report',
        key: 'report',
        children : [
            {
                label: 'Report list',
                key: 'Report list'
            },
        ]
    },
    
]

function SideBar() {
    return(
        <div className="SideBar">
            <Menu
                mode="vertical"
                style={{ height: '100%', borderRight: 0, backgroundColor: '#f5f5f5' }}
                items={menuData}>
            </Menu>
        </div>
    );
}

export default SideBar;