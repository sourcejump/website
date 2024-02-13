import type { FC } from 'react';
import Image from 'next/image';

const Page: FC = async () => (
  <section className="container">
    <h1 className="font-bold text-4xl">SourceJump</h1>

    <Image src="/next.svg" alt="Next Logo" width={72} height={16} priority />
  </section>
);

export default Page;
