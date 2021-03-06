drop table if exists trend;
drop table if exists UserCart;
drop table if exists product;
drop table if exists admin cascade;

create table admin(
    id serial primary key,
    username varchar(50) not null,
    password varchar(69) not null,
    first_name varchar(50) not null,
    last_name varchar(50) not null
);
insert into admin (username,password,first_name,last_name)
values ('danielstmartin', 'myPassword', 'Daniel', 'St Martin');
create table product(
    product_id serial primary key,
    name varchar(35) not null,
    price float not null,
    description text not null,
    image text not null,
    category text,
    admin_id integer references admin(id)
);
insert into product(name,price,description,image,category,admin_id)
values ('Airport','35.00','I really love fantasy anime, and any thing out of the ordinary. I think that side of me shows up in this design. I always fantasize about catching a ride on a bird or an insect XD (I know I am kinda odd) ^_^”.','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Store/Store/Store/Airport2_large.png','shirt', 1),
('Carwash(2nd Gen)','35.00','Most people, who follow my art know I love mecha. But in that category I have a special spot for jets, specifically fighter jets! As a result I watch a lot of anime featuring jets like Macross (really love Macross zero!), Yukikaze and a new one, "sky crawlers". I am also a huge fan of the ace combat series. With "Car wash" I wanted to illustrate a scene of a small mercenary team. I created some new OCs (Original characters) Kenzo the pilot, Rachel the mechanic, and Sylvester the crew chief (who is not amused with the antics of her ace and mechanic). I really had fun creating these characters, maybe we will see them again XD','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Store/Store/Store/CARWASH5_large.png','shirt', 1),
('Flag','30.00','Flag is my second graphic tee. With this design I really tried a very different anime art style and theme. I do this often because...I get bored easily and love trying new things ^_^”. Flag or “Capture the flag” as I like to call it features three new OCs (original characters), Inoue Sato and two others (who will be revealed later) in a scenario very similar to the traditional game of capture the flag. But you can probably tell that this version of the game is a little more serious! XD','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Store/Store/Store/Flag_large.png','shirt', 1),
('Long Distance','25.00','Long Distance is very experimental. It is minimalist with very few elements. I want people to think about the scene and come up with their own stories about it, so the art is more interactive and engaging. ^_^','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Store/Store/Store/LD_large.png','shirt', 1),
('Live','35.00','The inspiration for “Live” came from the anime Nana. I will admit I am not the biggest fan of shoujo anime but Nana was truly amazing. I especially liked the concert scenes, you could feel the energy and emotion as if it were real. I really wanted to recreate that feeling “Live”. I used three of our mascots to make the band. Yuki as the lead singer (with pink hair >_>), Shin as the bassist, and the Mie as the drummer.','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Store/Store/Store/Live2_large.png','shirt', 1),
('Mania','35.00','Mania is a celebration of what we do as artists. As an artist, there is no greater feeling than bringing all my crazy ideas to life and sharing them. The inspiration for the design came from my younger days when I used to draw on the floor with my brothers and tell elaborate stories around them! :-D','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Store/Store/Store/ManiaShirt_large.png','shirt', 1),
('Megalith','30.00','Megalith is a visual interpretation of one of my favorite songs. I have always been fascinated by how different forms of art can inspire and act as catalysts for one another. "Megalith Agnus Dei" is a powerful track from one of my favorite games "Ace Combat 4". I wanted to draw something that captured the heavenly chorus, the heavy bass from the baroque instruments and just the overwhelming feeling I get when listening to the track.','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Store/Store/Store/Megalith_large.png','shirt', 1),
('Pisces','30.00','Have you ever looked at a drawing and it sucks you in? I mean like you experience it more than just visually. You can feel the breeze, smell scents, and even hear sounds from the drawing. I personally experience this when I look at the works of one of my favorite artists, Shinkai Makoto (新海 誠). I really wanted to do something like that with Pisces. I hope when one looks at the drawing they can feel the subtle breeze or hear the deep bassy sound of a 30,000 kg. humpback whale passing above. Well...not sure if I succeeded but hope you like the anime art.','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Store/Store/Store/PISCESSHIRT4_large.png','shirt', 1),
('Pirate Star','25.00','Pirate Star, is our logo shirt!  A lot of our fans have been asking for it. At first, we were not sure we were going to make one. But since a lot of people were asking for it, we decided to go for it. And we are pleasantly surprised by how much we like it. Pirate Star is a celebration of our brand, Boomslank!','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Store/Store/Store/PirateStar_large.png','shirt', 1),
('Reflection','35.00','Reflection is an illustration of a somewhat strange habit of mine. When I come across an animal like a stray cat, dog or bird, I tend to get absorbed into its world. I wonder what it is thinking, where it is going, what hopes and worries it may have. And in the rare occasion when it looks back, I wonder what it thinks of me. Hehe probably a little odd right? ^_^','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Store/Store/Store/REFLECTION_2_large.png','shirt', 1),
('Raiden','30.00','In anime, I am really fond of "sleeper characters". For example in anime like Gunslinger Girl  or Kino no tabi, you have innocent, young characters who turn out to be highly trained and very deadly. After all who would suspect the quiet maid to be an under cover assassin? XD','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Store/Store/Store/Raiden5_large.png','shirt', 1),
('Ronin','25.00','Ronin is a celebration of one of my favorite artifacts of Japanese history and ancient culture, the Samurai. My fascination with the Samurai later paved the way for my love for anime with such shows as Ruroni Kenshin (Still holds a nostalgic place in my heart ^_^), Samurai Champloo (watch if you have not already.. seriously) and later Bleach. While illustrating Ronin I debated whether to have a person wear the armor. I later decided against this because I wanted the armor to kinda be the focus and tell a story. Thats why I added a lot of scratches, dings and damages as well as running paint to show this an instrument with a history. ','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Store/Store/Store/Ronin2_large.png','shirt', 1),
('Tournament','25.00','The design of Tournament is inspired by my love of martial arts in anime. I have always loved beautifully animated and choreographed fight scenes in anime. ^_^','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Store/Store/Store/Tournament2_large.png','shirt', 1),
('Heavy Bag','30.00','Heavy Bag is an homage to my favorite aspect of anime... It is ability to inspire. I am a huge fan of physical fitness and it is a little embarrassing to admit, but I love watching anime while I workout ^_^". I watch scenes of Rock Lee from Naruto practicing alone in the forest or Goku from DBZ training under high gravity. Despite the fact that they are fictional their tenacity and relentless effort really inspire me to push my own limits. ','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Store/Store/Store/heavybag_large.png','shirt', 1),
('Space Cowboy','30.00','I consider space the final frontier for human exploration. This is why I am very fond of anime that depict space travel as commonplace as driving on the highway. As beings whose identities are very much tied to our home planet, I can not help wondering how differently we will think of the earth and ourselves when it becomes just another destination.','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Store/Store/Store/paceCowboy3_large.png','shirt', 1),
('Zero Frame (2nd Gen)','25.00','I have always been a huge fan of anime involving mecha (anime talk for machines). Shows like Gundam series, Evangelion, Escaflowne, Code Geass, even the classic Transformers all fall under this category. I love the mechanical details the artists put into the machines. One could almost imagine them existing in the real world. So I really wanted to design a mecha themed shirt, but also illustrate a cutaway art of the mecha showing some of the internal mechanical goblins ^_^. I also used a member of our ever increasing cast of mascots, “Mie chan: as the pilot XD.','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Store/Store/Store/zero2_large.png','shirt', 1);


create table UserCart(
 user_cart_id serial primary key,
 product_id integer references product(product_id),
 user_id integer references users(id),
 quantity integer default 1
 );
 insert into UserCart(product_id,user_id)
 values(1,1);

create table trend(
    trend_id serial primary key,
    title varchar(100) not null,
    cover_art text not null,
    admin_id integer references admin(id)
);
insert into trend(title, cover_art, admin_id)
values ('American Horror Story','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Am-hor.png', 1),
('Apex Legends','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Apex+Legends.png', 1),
('Attack on Titan','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/attack+on+titian.png', 1),
('Animated Series','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Animated+Series.png', 1),
('Anime','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Anime.png', 1),
('Arrowverse','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Arrowverse.png', 1),
('Assassins Creed','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Assassin.png', 1),
('Blizzard','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Blizzard.png', 1),
('Call of Duty','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Call+of+Duty.png', 1),
('Comic-Con','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Comic-con.png', 1),
('Comics','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Comics.png', 1),
('DC','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/DC.png', 1),
('Disney','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Disney.png', 1),
('Doctor Who','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Doctor+who.png', 1),
('Dragon Ball','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Dragonball.png', 1),
('Elder Scrolls','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/ElderScrolls.png', 1),
('Fallout','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Fallout.png', 1),
('Fantasy','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Fantasy.png', 1),                                   
('Final Fantasy','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Finalfantasy.png', 1),     
('Fortnite','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Fortnite.png', 1),
('Game of Thrones','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Game+of+thrones.png', 1),
('Game Reviews','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Game+Reviews.png', 1),
('Game Trailers','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Game+trailers.png', 1),
('GTA','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/GTA.png', 1),
('Harry Potter','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Harry+potter.png', 1),
('HBO','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/HBO.png', 1),
('Indie Games','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Indie.png', 1),
('Marvel','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/marvel.png', 1),
('Minecraft','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Minecraft.png', 1),
('Monster Hunter','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Monster+Hunter.png', 1),
('Naruto','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Naruto.png', 1),
('Netflix','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Netflix.png', 1),
('Nintendo','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Nintendo.png', 1),
('Overwatch','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Overwatch.png', 1),
('PC Gaming','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Pc.png', 1),
('PlayStation','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Playstation.png', 1),
('Pokémon','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Pokemon.png', 1),
('PUBG','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/PUBG.png', 1),
('Red Dead','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Red+Dead.png', 1),
('Rick and Morty','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Rick+and+Morty.png', 1),
('Sci-Fi','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Sci-fi.png', 1),
('Spider-Man','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Spider-man.png', 1),
('Star Trek','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Star-trek.png', 1),
('Star Wars','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Star-wars.png', 1),
('The CW','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/The+Cw.png', 1),
('The Walking Dead','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/The+Walking+Dead.png', 1),
('Warframe','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Warframe.png', 1),
('Xbox','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/Xbox.png', 1),
('Zelda','https://s3-us-west-1.amazonaws.com/my-first-backup-bucket-pp/Thumbnails/zelda.png', 1);