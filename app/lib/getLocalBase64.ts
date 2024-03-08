// import { getPlaiceholder } from 'plaiceholder';

// export default async function getBase64(src: string) {
//   try {
//     const res = await fetch(src);

//     if (!res.ok) {
//       throw new Error(`Failed to fetch image ${res.status} ${res.statusText}`);
//     }

//     const buffer = await res.arrayBuffer();

//     const { base64 } = await getPlaiceholder(Buffer.from(buffer));

//     console.log(base64);

//     return base64;
//   } catch (e) {
//     if (e instanceof Error) console.log(e.stack);
//     return null;
//   }
// }
