// Force dynamic rendering for this route segment
export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export default function ConfirmationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

