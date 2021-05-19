// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
	console.log("endpoint accessed");
	res.status(200).json({ text: "hello" });
};
