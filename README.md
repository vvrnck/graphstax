This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# GraphStax

<!-- ## About the project -->

This project is relative to Workwolf technical assignment.

## Project setup

### Prerequisites

- Nodejs (v16.15.0)

#### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

#### 2. Run the project

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Compile and build

```bash
npm run build
# or
pnpm build
```


## Run next build

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## Tests

```bash
npm run test
# or
yarn test
# or
pnpm test
```


## Good Practices

* CSS classes should use 2 underscore to separate words (ex: read__me);
* The ```global.css``` should contain only generic classes;
* Create new styles modules to new pages/components;
* Write generic functions/components that can be re-used (hooks for instance);
* API calls should be wrapped in promises under the ```api``` folder;
* TypeScript should be used as much as possible - avoid ```any``` type;

## Notes

>For the simplicity of the project (and the intention of technical assignment):

* No external libs will be used.
* Tests will only cover form validation and main UI components.
* Some folders without content exists just for the sake of the assignment.
* No css preprocessor.
* Mixed grid/flex css.



<!-- ## Vercel default documentation starts here -->

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
