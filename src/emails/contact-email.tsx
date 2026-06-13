import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

type Props = {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
};

export function ContactEmail({ name, email, subject, message, timestamp }: Props) {
  return (
    <Html>
      <Head />
      <Preview>New portfolio inquiry from {name} — {subject}</Preview>
      <Tailwind>
        <Body className="bg-[#FAF8F5] font-sans">
          <Container className="mx-auto my-10 max-w-[600px] rounded-2xl bg-white p-0 shadow-sm">
            <Section className="rounded-t-2xl bg-[#0F172A] px-8 py-7">
              <Heading className="m-0 text-2xl font-semibold text-white">
                New project inquiry
              </Heading>
              <Text className="m-0 mt-1 text-sm text-white/65">
                via masumkamal.design
              </Text>
            </Section>

            <Section className="px-8 py-7">
              <Row label="From" value={`${name} <${email}>`} />
              <Row label="Subject" value={subject} />
              <Row label="Received" value={timestamp} />

              <Hr className="my-6 border-[#E5E2DC]" />

              <Text className="m-0 text-xs uppercase tracking-[0.18em] text-[#94A3B8]">
                Message
              </Text>
              <Text className="mt-2 whitespace-pre-wrap text-[15px] leading-relaxed text-[#334155]">
                {message}
              </Text>

              <Hr className="my-6 border-[#E5E2DC]" />

              <Text className="m-0 text-xs text-[#94A3B8]">
                Reply directly to this email to respond to {name}.
              </Text>
            </Section>

            <Section className="rounded-b-2xl bg-[#FAF8F5] px-8 py-5 text-center">
              <Text className="m-0 text-xs text-[#94A3B8]">
                Md. Masum Kamal · Graphic Designer · Portfolio inquiry
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <Section className="mb-3">
      <Text className="m-0 text-xs uppercase tracking-[0.18em] text-[#94A3B8]">
        {label}
      </Text>
      <Text className="m-0 mt-1 text-[15px] font-medium text-[#0F172A]">{value}</Text>
    </Section>
  );
}

export default ContactEmail;
