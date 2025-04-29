import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="bg-blue-600 dark:bg-blue-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 9h14l-1 7h-12z" />
                <path d="M5 5h14" />
                <path d="M8 5v4" />
                <path d="M16 5v4" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">プルテウスレンタカー</h1>
              <p className="text-xs sm:text-sm">Pluteus Rent-a-Car</p>
            </div>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="hover:underline text-sm sm:text-base">ホーム</a>
            <a href="#" className="hover:underline text-sm sm:text-base">車両一覧</a>
            <a href="#" className="hover:underline text-sm sm:text-base">料金</a>
            <a href="#" className="hover:underline text-sm sm:text-base">お問い合わせ</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">準備中</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">新しいサービスの準備を進めています。もうしばらくお待ちください。</p>
        </div>

        {/* Main Image */}
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/プルテウスレンタカー.png"
            alt="プルテウスレンタカー"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
            quality={30}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHXG8LNAAAAABJRU5ErkJggg=="
          />
        </div>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">高品質な車両</h3>
            <p className="text-gray-600 dark:text-gray-300">最新モデルの車両を取り揃えています。安全で快適なドライブをお楽しみいただけます。</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">簡単予約</h3>
            <p className="text-gray-600 dark:text-gray-300">オンラインで簡単に予約可能。スムーズな手続きでお客様の時間を大切にします。</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">24時間サポート</h3>
            <p className="text-gray-600 dark:text-gray-300">いつでもサポートが必要な時に対応。安心してご利用いただけるサービスを提供します。</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <p className="text-sm">&copy; 2025 プルテウスレンタカー. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-sm hover:underline">プライバシーポリシー</a>
              <a href="#" className="text-sm hover:underline">利用規約</a>
              <a href="#" className="text-sm hover:underline">お問い合わせ</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
