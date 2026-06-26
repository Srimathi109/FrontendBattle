

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} AI SaaS. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}