module.exports.config = {
    name: "autotime",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "msg",
  prefix: true, 
  category: "user", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};
const nam = [{
    timer: '12:00:00 AM',
    message: ['~ এখন রাত ১১টা বাজে ঘুমাও না হলে আসো গেম খেলি😙']
},
             {
    timer: '1:00:00 AM',
    message: ['~ এখন রাত ১২টা বাজে কেউ টয়লেটে ডুকবে না 🤟']
},
						{
    timer: '2:00:00 AM',
    message: ['~এখন রাত ১টা বাজে প্রেম না কইরা যাইয়া ঘুমা বেক্কল😾']
},
						 {
    timer: '3:00:00 AM',
    message: ['~এখন রাত ২টা বাজে যারা ছ্যাকা খাইছে তারা জেগে আছে🫠🫠।']
},
						 {
    timer: '4:00:00 AM',
    message: ['~এখন রাত ৩টা বাজে সবাই মনে হয় ঘুম🥹 আমার ভাই ঘুম আসে না  ']
},
						 {
    timer: '5:00:00 AM',
    message: ['~এখন রাত ৪টা বাজে একটু পর ফজরের আযান দিলে নামাজ পড়ে নিও সবাই ']
},
						 {
    timer: '6:00:00 AM',
    message: ['~এখন ভোর ৫টা বাজে সবাই নামাজ পড়ছো তো?❤️  ']
},
						 {
    timer: '7:00:00 AM',
    message: ['~এখন সকাল ৬টা বাজে ঘুম থেকে উঠো সবাই  ']
},
						 {
    timer: '8:00:00 AM',
    message: ['~এখন সকাল ৭টা বাজে সবাই ব্রেকফাস্ট করে নাও😊 ']
},
						 {
    timer: '9:00:00 AM',
    message: ['~ ৮টা বাজে উঠ যারুয়া ']
},
             {
    timer: '10:00:00 AM',
    message: ['~ ৯ টা বাজে ঘুম থেকে উঠ আন্টিরে বলো দিবো ' ]
},
						 {
    timer: '11:00:00 AM',
    message: ['~এখন সকাল ১০টা বাজে যারা ঘুম থেকে উঠে নাই তারা গে ']
},
						 {
    timer: '12:00:00 PM',
    message: ['~ এখন ১৯৭১ সাল ']
},					
						 {
    timer: '1:00:00 PM',
    message: ['টাইম দেখ কয়টা বাজে❤️ ']
},
						 {
    timer: '2:00:00 PM',
    message: ['~ ১টা বাজে গোছল করতে যা সাবধান টয়লেটে উল্টা পাল্টা কিছু করবি না 😻 ']
},
						 {
    timer: '3:00:00 PM',
    message: ['~এখন দুপুর ২টা বাজে মারা দে সব  ☺️']
},
						 {
    timer: '4:00:00 PM',
    message: ['~ ৩টা বাজে ঘুমা শালা এখন']
},
						{
    timer: '5:00:00 PM',
    message: ['~ কিরে বলদ ৪টা বাজে যা বাহিরে মারা দিতে যা ']
},
						 {
    timer: '6:00:00 PM',
    message: ['~ ৫টা বাজে মেয়ে দেখা বাদ দিয়া বাড়িতে যা তোর আম্মু অপেক্ষায় আছে 😻']
},
						 {
    timer: '7:00:00 PM',
    message: ['~ ৬টা বাজে চলো নাচি . ']
},
             {
    timer: '8:00:00 PM',
    message: ['৭ টা বাজে পড়তে বয় না হলে তোর গানফেন্ড এর নাম্বার দে ']
},
             {
    timer: '9:00:00 PM',
    message: [' আন্টি আপনার ছেলে ৩ ঘন্টা ধরে একটা মেয়ের সাথে কথা বলতেছে এখন ৮ টা বাজে তাও উঠে না ']
},
             {
    timer: '10:00:00 PM',
    message: [' ৯ টা বাজে খাবি না তারাতাড়ি খা']
},
            {
    timer: '11:00:00 PM',
    message: ['~ ১০টা বাজে নুসরাতের কথা মনে পরে গেলো 😭 তোমাদের এক্স এর কথা মরে পরে না ']
}];
module.exports.onLoad = o => setInterval(() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};
