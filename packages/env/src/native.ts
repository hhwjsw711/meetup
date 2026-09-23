import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	clientPrefix: "EXPO_PUBLIC_",
	client: {
		EXPO_PUBLIC_CONVEX_URL: z.url(),
		EXPO_PUBLIC_CONVEX_SITE_URL: z.url(),
	},
	// IMPORTANT: Do not use `runtimeEnv: process.env` in React Native.
	// Expo's compiler inlines `process.env.EXPO_PUBLIC_*` as string literals
	// at build time, but only when each property is accessed individually.
	// Passing the whole `process.env` object gives an empty object in Release
	// builds, causing createEnv to throw a ZodError on app startup.
	runtimeEnv: {
		EXPO_PUBLIC_CONVEX_URL: process.env.EXPO_PUBLIC_CONVEX_URL,
		EXPO_PUBLIC_CONVEX_SITE_URL: process.env.EXPO_PUBLIC_CONVEX_SITE_URL,
	},
	emptyStringAsUndefined: true,
});
