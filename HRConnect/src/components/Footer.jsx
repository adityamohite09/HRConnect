function Footer() {
  return (
    <footer className="mt-5" style={{ background: "#333", color: "#fff", textAlign: "center", padding: "10px" }}>
      <p>© {new Date().getFullYear()} HRConnect</p>
    </footer>
  );
}

export default Footer;
