function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>
        Inspired by Brittany Chiang <br />
        &copy;{year} May Chang
      </div>
    </footer>
  );
}

export default Footer;
