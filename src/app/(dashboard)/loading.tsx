export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-24 w-24">
          {/* Logo placeholder - replace with your own logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-primary/20"></div>
          </div>
          <svg
            className="animate-spin h-24 w-24 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
        <div className="space-y-2 text-center">
          <h3 className="text-xl font-medium text-foreground">
            Loading content
          </h3>
          <p className="text-sm text-muted-foreground">
            Please wait while we prepare your experience
          </p>
        </div>
        <div className="w-48">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <div className="animate-progress h-full bg-primary"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
