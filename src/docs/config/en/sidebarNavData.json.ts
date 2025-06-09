import type { DocSection } from "../types/configDataTypes";

/**
 * Ordered list of documentation sections
 * The order here determines the display order in navigation
 */
const docSections: DocSection[] = [
	{
		id: "getting-started",
		title: "Getting Started",
	},
	{
		id: "hosted",
		title: "Hosted by Lumenize",
	},
	{
		id: "self-host",
		title: "Self Host on Cloudflare",
	},
	{
		id: "guides",
		title: "Guides",
	},
	{
		id: "client-libraries",
		title: "Client Libraries",
	},
	{
		id: "examples",
		title: "Examples",
	},
	{
		id: "deployment",
		title: "Deployment",
	},
];

export default docSections;