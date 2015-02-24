var json = {
	"genwi_analytics" : {
		"title" : "Genwi Analytics",
		"writeup" : "<b>SUMMARY </b><br>Analytics dashboard for genwi apps. The dashboard gives the customer a view of usage of their apps in terms of users, content consumption and growth in terms of sharing. The preview here depicts the thought process that went into working out the basic structure of dashboard and the individual modules. <p><b> ROLE</b><br> Research about customer behavior, mockups for initial strucuture of dashboard, designing modules to represent various statistics. Lead developer for the various modules.</p> ",
		"images" : [
				"https://dl.dropbox.com/s/uh3m6rzvwihdllr/intro.png?dl=0",
				"https://dl.dropbox.com/s/v1v6i7lzax0e7d0/legacy%20old%20sketch.png?dl=0",
				"https://dl.dropbox.com/s/r8m7fa912ao8miu/NEW%20ANALYTICS.png?dl=0",
				"https://dl.dropbox.com/s/e9ndlh0baoqur61/legacy%20.png?dl=0",
				"https://dl.dropbox.com/s/5yi3zhjdezfsrrm/basic%20flow.png?dl=0",
				"https://dl.dropbox.com/s/7tp6ltgbdrv3gfu/users%20tab%20writeup.png?dl=0",
				"https://dl.dropbox.com/s/wjljerq53udg2ca/content%20tab%20writeup.png?dl=0",
				"https://dl.dropbox.com/s/rzt3ftcxkmp6rvt/share%20writeup.png?dl=0",
				"https://dl.dropbox.com/s/pyhkmzo0sp3d82r/filters.png?dl=0",
				"https://dl.dropbox.com/s/vxh1p9vgk7dob78/top%20items.png?dl=0",
				"https://dl.dropbox.com/s/ihz5kzvvjzi9mtw/pie%20chart.png?dl=0",
				"https://dl.dropbox.com/s/qp7qswau1bzwajz/pie%20chart%202.png?dl=0",
				"https://dl.dropbox.com/s/2m7v5k5z21qw53u/line%20chart.png?dl=0",
				"https://dl.dropbox.com/s/92pqtvb4vg03har/line%20chart%202.png?dl=0",
				"https://dl.dropbox.com/s/2gkv13wmaxuamis/ADDITONAL%20POINTS.png?dl=0",
				"https://dl.dropbox.com/s/3z1xsp4nt9fbl92/USERS.png?dl=0",
				"https://dl.dropbox.com/s/zmqv32scjet6jet/CONTENT.png?dl=0",
				"https://dl.dropbox.com/s/0uh9w2dis8vmu7e/SHARE.png?dl=0"
		]
	},
	"genwi_fw" : {
		"title" : "Genwi Template Framework",
		"writeup" : "<b>SUMMARY</b> <br>Front end web framework to simplify and standardise the app development process at Genwi reduciung the turnaround time to develop new apps for customers.The preview shows the most important features of the framework and their significance.<p> <b>ROLE</b><br> Contributed to the initial design and use case research with team lead. Lead developer.</p> ",
		"images" : [
				"https://dl.dropbox.com/s/mj5xxbmyits8z2n/1.png?dl=0",
				"https://dl.dropbox.com/s/smzpd74ro98f7a5/inheritance.png?dl=0",
				"https://dl.dropbox.com/s/yvarfxp4bc62dhg/click.png?dl=0",
				"https://dl.dropbox.com/s/xvt5q8bdacmiqzb/event%20handlers.png?dl=0",
				"https://dl.dropbox.com/s/hw2uq1glrkb493n/Device%20identifiers.png?dl=0"
		]
	},
	"genwi_apps" : {
		"title" : "Genwi Customer Projects",
		"writeup" : "<b>SUMMARY</b><br>The preview here shows a couple of projects where the customer requirements involved designs which were innovative and never done before.  We had to take care of many usecases in terms of how the end user can use the interface.Genwi Apps are hybrid; so the design were implemented using front end web tools and as such the limitation posed by tools also had to be taken care of.</p> <p><b>ROLE</b><br> Lead Developer, Designer.</p>",
		"htmls" : [
			"<div style='text-align: center;padding-top: 20px;width:80%;margin: auto;'><h2> MAGAZINE LAYOUT ( CUSTOMER - CA TECHNOLOGIES)</h2><br><br><br><div style='display: inline-block;width:55%;vertical-align: top; margin-right:30px;text-align: left;'>For this requirement from customer we needed to design a magzine kind of experience for tablets. If we see the way we hold our tablet, its almost like a book or magazine. Hence, having a multi-columnn magazine layout does make sense because the user is already has experience to that kind of UI and it makes good case of displaying content in a larger area.<p>There were some key points with which we designed and implemented this layout considering the way user reads a magazine and also the customer needs.</p><p>1. The ability to swipe and move to next page just like we do flip to move to next page in magazine.</p><p>2. Glass effect or the feature of dragging a page. (Check video at 1-3 sec). This adds to this whole experience of interacting with a magazine like layout.</p><p>3. Apart from this we also added indicators (middle left) to make sure the user has a sense of how much pages are there and what page he is on.</p><p>4. Also to provide customer the ability to customize the layout in terms of adding inline images and other styling the code was written and structured in a way to allow such designs.<p></div><div style='display: inline-block;width:40%'><iframe width='100%' height='315' src='https://www.youtube.com/embed/jYYxyEJT4f4' frameborder='0' allowfullscreen ></iframe></div></div>",
			"<div style='text-align: center;padding-top: 20px;width:80%;margin: auto;'><h2> FLIPVIEW LAYOUT (CUSTOMER - NVISION)</h2><br><br><br><div style='display: inline-block;width:55%;vertical-align: top; margin-right:30px;text-align: left;'>This customer project involved showing the data between different categories using a 3d flip. A 3d flip is different from normal swipe in a way that the slide is rotated instead of animating left or right. The video shows a demo of the implementation we open sourced after doing the customer project. (check open source project <a href='https://github.com/agaase/flipview'>here.</a>)<p>There were many points that we took care of in terms of how the user will interact with a layout like this.</p><p>1. The ability to quickly flip to the next slide by doing a swipe using touch. (Check 6-9 sec in video)</p><p>2. Panning effect in which case the user can drag the slide instead of quickly flipping it such that he can see the back and front slide simulataneously.(Check 19-27 sec in video). </p><p>3. An appearance that slide moves inside and as such looks smaller when the flip or dragging is done. This also makes sure that slide when its rotated it doesnt get cut at the device boundaries.</p></div><div style='display: inline-block;width:40%'><iframe width='100%' height='315' src='https://www.youtube.com/embed/CTRnyGKhBuo' frameborder='0' allowfullscreen ></iframe></div></div>",
		]
	}, 
	"spotify" : {
		"title" : "Help me Spotify!",
		"writeup" : "<b>SUMMARY</b><br>A design analysis as part of the blog -  Designalysed. It discusses the many usecases the Spotify offers, the paint points and bad design user faces and what could be done to improve them.<p> <b>ROLE</b><br> Analyse the usecases of products in terms of user experience, design mockups for alternate designs to various layouts.</p>",
		"images" : [
			"https://dl.dropbox.com/s/5bgv0xw3d02jzwb/spotify.png?dl=0",
			"https://dl.dropbox.com/s/fytqge62q0u9pnu/spotify%202.png?dl=0",
			"https://dl.dropbox.com/s/i0p3d2qbtdusgzb/spotify%203.png?dl=0",
			"https://dl.dropbox.com/s/bysupswjvj76o0f/spotify%203.2.png?dl=0",
			"https://dl.dropbox.com/s/sjphnmhp4yhki4j/spotify%204.png?dl=0",
			"https://dl.dropbox.com/s/jml9lkp29psd7eb/spotify%205.png?dl=0",
			"https://dl.dropbox.com/s/bn5amfd4ppbswx8/spotify%206.png?dl=0",
			"https://dl.dropbox.com/s/0v9u8oa04x0x5qe/spotify%207.png?dl=0",
			"https://dl.dropbox.com/s/7xat6575tsqf5g7/spotify%208.png?dl=0",
			"https://dl.dropbox.com/s/tmr95nkjs8wjmu7/spotify%209.png?dl=0",
			"https://dl.dropbox.com/s/lq9df0jjcm2zodg/spotify%2010.png?dl=0"
		]
	},
	"mnu" : {
		"title"  : "Magazine & You",
		"writeup" : "<b>SUMMARY</b><br>An online community of magazine lovers where people can share and discuss different things related to magazines. This preview shows the screenshots of different parts of the desktop portal. <p><b>ROLE</b><br> Founded the online community and also did the design, development of the portal.</p> ",
		"images" : [
				"https://dl.dropbox.com/s/vkp7avc9wjf2w5k/HOME%20PAGE.png?dl=0",
				"https://dl.dropbox.com/s/o1hetmfn22tovcr/HOME%20PAGE%202.png?dl=0",
				"https://dl.dropbox.com/s/d62uutdif8lemmg/HOME%20PAGE%201.png?dl=0",
				"https://dl.dropbox.com/s/wmlhg9b3evvliha/LIST%20OF%20BOOKS.png?dl=0",
				"https://dl.dropbox.com/s/66heb8ed25ptsu7/MAGAZINE%20PAGE.png?dl=0",
				"https://dl.dropbox.com/s/ztifafz7r3vlxzq/STORY.png?dl=0",
				"https://dl.dropbox.com/s/k4vaeshiewea5da/TOOLBAR.png?dl=0",
				"https://dl.dropbox.com/s/rdzp4rpgv77pesi/PROFILE%201.png?dl=0"
		]
	},
	
};