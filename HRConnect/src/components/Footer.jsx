function Footer() {
  return (
    <footer className="w-100 position-absolute bottom-0" style={{ background: "#333", color: "#fff", textAlign: "center", padding: "10px" }}>
      <p>© {new Date().getFullYear()} HRConnect</p>
    </footer>
  );
}

export default Footer;
