function FindProxyForURL(url, host) {
  PROXY = "PROXY 75.162.7.222:8080";

  // Apple.com via proxy
  if (shExpMatch(host, "*.monip.org")) {
    return PROXY;
  }
  // Everything else directly!
  return "DIRECT";
}
