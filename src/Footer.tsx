export function Footer({ copyrightText }: { copyrightText: string }) {
    return (
      <footer className="bg-gray-800 dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <span
            className="block text-sm text-gray-300 sm:text-center dark:text-gray-400"
            dangerouslySetInnerHTML={{ __html: copyrightText }}
          ></span>
        </div>
      </footer>
    );
  }