interface Props {
  children: React.ReactNode
  bgColor?: string
}

export default function SectionWrapper({ children, bgColor = "bg-brand-900" }: Props) {
  return <section className={`${bgColor} py-16 px-6`}>{children}</section>
}
