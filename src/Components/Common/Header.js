import React from "react";
import { Image, Space, Typography } from "antd";
import { BellFilled } from "@ant-design/icons"
function Header() {
    return(
        <div className="AppHeader">
            <Image
                width={40}
                src="https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png"
            ></Image>
            <Typography.Title>
                Header Banner
            </Typography.Title>
            <Space>
                <BellFilled style={{ fontSize: 24}}></BellFilled>
            </Space>
        </div>
    );
}

export default Header;