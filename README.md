<div align="center">

<img src="https://github.com/user-attachments/assets/f72235d8-9a80-476a-b2e8-5de1608d5632"
         width="128"
         height="128"
         alt="Icon">

# SMBU Connect Verge

[English](README.md) | [中文](README.zh-CN.md)

![Action](https://github.com/imBlanker/smbu-connect-verge/actions/workflows/release.yml/badge.svg)
![Release](https://img.shields.io/github/v/release/imBlanker/smbu-connect-verge)
![Downloads](https://img.shields.io/github/downloads/imBlanker/smbu-connect-verge/total)
![License](https://img.shields.io/github/license/imBlanker/smbu-connect-verge)
![Stars](https://img.shields.io/github/stars/imBlanker/smbu-connect-verge)

</div>

> **Note**: This project is forked from [kowyo/hitsz-connect-verge](https://github.com/kowyo/hitsz-connect-verge). Thanks to [Kowyo](https://github.com/kowyo) for the original work.

## Introduction

SMBU Connect Verge is a GUI of [ZJU Connect](https://github.com/Mythologyli/zju-connect). It is built for users of ZJU Connect/EasyConnect at SMBU (Shenzhen MSU-BIT University, 深圳北理莫斯科大学).

## Platform Support

> [!WARNING]
> - **Windows**: Fully supported and tested.
> - **macOS**: Not supported. The maintainer does not have access to macOS for testing. If you need macOS support, please fork this repository.
> - **Linux**: Not guaranteed. May work but is not actively tested.

## Features

- Fast and green compared to **EasyConnect**.
- Built with PySide6, easy to build and maintain.
- Works with other applications like Clash, Remote Desktop, and SSH. (See [Working with other applications](#working-with-other-applications))
- Supports custom server address/DNS/HTTP/SOCKS5 proxy port, and keep-alive settings. (If you need additional parameters, please submit an issue/PR)

## Installation

You can install SMBU Connect Verge in two ways: downloading pre-built binaries or building from source.

> [!NOTE]
>
> 1. If you are a student of SMBU, username and password are the same as the ones you use to log in to the campus unified identity authentication platform.
> 2. If the download speed is slow, you can try using [gh-proxy](https://gh-proxy.com) to download.

### Method 1: Downloading pre-built binaries

SMBU Connect Verge provides out-of-the-box experience. You can download the latest version from the [release page](https://github.com/imBlanker/smbu-connect-verge/releases/latest).

### Method 2: Building from source

1. Clone the repository:

   ```bash
   git clone https://github.com/imBlanker/smbu-connect-verge.git
   cd smbu-connect-verge
   ```

2. Install dependencies:
   - Install [uv](https://docs.astral.sh/uv/getting-started/installation/)

   - Sync the environment:

     ```bash
     uv sync
     ```

3. Run the application:

   macOS/Linux

   ```bash
   source .venv/bin/activate
   uv run app/main.py
   ```

   Windows (Powershell)

   ```powershell
   .\.venv\Scripts\activate.ps1
   uv run .\app\main.py
   ```

4. (Optional) Build the binaries:

   Please refer to our [GitHub Actions workflow](.github/workflows/release.yml) for more information.

## Working with other applications

### Basic information

- **Server**: 121.15.0.126
- **Port**: 10773
- **SOCKS5 Proxy**: 1080
- **HTTP Proxy**: 1081

If you want to learn more about the network configuration, you can visit [Mythologyli/zju-connect](https://github.com/Mythologyli/zju-connect).

### Clash

If you want to use Clash at the same time, you can add the following configuration to your clash configuration file.

For example, if you are using [Clash Verge Rev](https://github.com/clash-verge-rev/clash-verge-rev), you can go to 'Profiles' -> Right click on the profile you are using -> 'Edit File' -> Add the following configuration:

```yaml
# note: do not append this to the end of the file directly, append it separately to the corresponding position
proxies:
  # your existing proxies...
  - { name: "SMBU Connect Verge", type: socks5, server: 127.0.0.1, port: 1080, udp: true }

proxy-groups:
  # your existing proxy-groups...
  - { name: 校园网, type: select, proxies: ["DIRECT", "SMBU Connect Verge"] }

rules:
  # your existing rules...
  - "IP-CIDR,10.0.0.0/8,校园网,no-resolve"
  # - 'IP-CIDR,<other_ip>,校园网,no-resolve'
```

> [!NOTE]
>
> 1. You need to enable `TUN Mode` in Clash, and enable the `Auto Configure Proxy` option of this software.
> 2. You need to turn off the `Always use Default Bypass` option in the `System Proxy` settings, and add `localhost` to the `Proxy Bypass` field.s
> 3. A useful [global extend script](./clash-utils.js) is provided if you want to avoid the automatic update of the profiles overwrite your custom rules.

<!-- > (Confusion) 3. There is no need to enable the `Auto Configure Proxy` feature of this software. In this case, Clash will host the system proxy and the proxy of this software will be forwarded by Clash. -->

[Learn more](https://oldkingok.cc/share/8bFQXBjOkXt8)

### Remote Desktop

If you want to connect to the remote desktop in the campus network, you can use [Parallels Client](https://www.parallels.com/hk/products/ras/capabilities/parallels-client/), and configure the local 1080 port as a proxy.

### SSH

If you want to use SSH, you can use the following command to establish a connection.

For macOS/Linux users:

```bash
ssh -o ProxyCommand="nc -X 5 -x 127.0.0.1:1080 %h %p" <root>@<server> -p <port>
```

For Windows users, you can use [ncat](https://nmap.org/download.html) to setup SOCKS 5 proxy. Run the following command after installing ncat:

```powershell
ssh -o "ProxyCommand=ncat --proxy 127.0.0.1:1080 --proxy-type socks5 %h %p" <root>@<server> -p <port>
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

Also, any typo is welcome to be fixed.

## Related Projects

- [chenx-dust/EZ4Connect](https://github.com/chenx-dust/EZ4Connect): EZ4Connect, a cross-platform GUI for ZJU Connect.
- [Mythologyli/zju-connect](https://github.com/Mythologyli/zju-connect): ZJU Connect, the underlying VPN client.

## Credits

- [Kowyo](https://github.com/kowyo) for the original project [hitsz-connect-verge](https://github.com/kowyo/hitsz-connect-verge), from which this project is forked.

- [Mythologyli](https://github.com/Mythologyli) for the project [ZJU Connect](https://github.com/Mythologyli/zju-connect).

- [EasierConnect](https://github.com/lyc8503/EasierConnect).

- All the contributors to this project.
