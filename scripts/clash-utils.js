function main(config, profileName) {
  // Append proxy
  config.proxies = config.proxies || [];
  config.proxies.push({
    name: "SMBU Connect Verge",
    type: "socks5",
    server: "127.0.0.1",
    port: 1080,
    udp: true,
  });

  // Append proxy group
  config["proxy-groups"] = config["proxy-groups"] || [];
  config["proxy-groups"].push({
    name: "校园网",
    type: "select",
    proxies: ["DIRECT", "SMBU Connect Verge"],
  });

  // Append rules
  config.rules = config.rules || [];
  config.rules.push(
    "IP-CIDR,10.0.0.0/8,校园网,no-resolve",
    // You can add more IP-CIDR rules here if needed
  );

  return config;
}
