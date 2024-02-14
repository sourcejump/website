import Image from 'next/image';
import type { FC } from 'react';

const Page: FC = async () => (
  <section className="container">
    <h1 className="text-4xl font-bold">SourceJump</h1>

    <Image src="/next.svg" alt="Next Logo" width={72} height={16} priority />
  </section>
);

export default Page;
