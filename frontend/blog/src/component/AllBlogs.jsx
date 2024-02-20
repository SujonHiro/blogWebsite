import categoriesList from "../utility/categories";
import Card from "./Card";

const AllBlogs = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 my-12 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-3">
          <Card
            imgageURL="https://images.unsplash.com/photo-1582657233895-0f37a3f150c0?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI2fHxmYXNoaW9uJTIwJTIwZmxvd2VyfGVufDB8fHx8MTY5MjQ0NTE5Mnww&ixlib=rb-4.0.3&q=80&w=2000"
            categoriesListName={categoriesList[0].name}
            categoriesListStyle={categoriesList[0].bgcolor}
            Cartitle="Autumn is a second spring when every leaf is a flower"
            cardDescription="Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening. The wind had by.during our darkest moments that we must focus to see the light..."
            authoName="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            postTime="20 minutes ago"
          />
          <Card
            imgageURL="https://images.unsplash.com/photo-1559563458-527698bf5295?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDI5fHxiYWd8ZW58MHx8fHwxNjcxNDMxNDg0&ixlib=rb-4.0.3&q=80&w=2000"
            categoriesListName={categoriesList[1].name}
            categoriesListStyle={categoriesList[1].bgcolor}
            Cartitle="Dramatically improve your cooking using just your imagination"
            cardDescription="She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despise almost every body and"
            authoName="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            postTime="27 minutes ago"
          />
          <Card
            imgageURL="https://images.unsplash.com/photo-1619735007512-34004ec2f348?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDMyfHxpbWFnaW5hdGlvbnxlbnwwfHx8fDE2NzE0MzA4NDI&ixlib=rb-4.0.3&q=80&w=2000"
            categoriesListName={categoriesList[2].name}
            categoriesListStyle={categoriesList[2].bgcolor}
            Cartitle="It is during our darkest moments that we must focus to see the light"
            cardDescription="You cannot too assiduously attend to Madame Duval herself; but I would wish you to mix as little as possible with her associates, who are not likely to be among those whose acquaintance would"
            authoName="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            postTime="12 hour ago"
          />
          <Card
            imgageURL="https://images.unsplash.com/photo-1504890001746-a9a68eda46e2?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDd8fGRyb25lfGVufDB8fHx8MTY5MjQ0NTYwM3ww&ixlib=rb-4.0.3&q=80&w=2000"
            categoriesListName={categoriesList[1].name}
            categoriesListStyle={categoriesList[1].bgcolor}
            Cartitle="It is during our darkest moments that we must focus to see the light"
            cardDescription="You cannot too assiduously attend to Madame Duval herself; but I would wish you to mix as little as possible with her associates, who are not likely to be among those whose acquaintance would"
            authoName="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            postTime="3 hour ago"
          />
          <Card
            imgageURL="https://images.unsplash.com/photo-1522000243595-42c412404679?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDN8fGZhc2hpb24lMjBzZWElMjB0ZWNofGVufDB8fHx8MTY5MjQ0NTg4NHww&ixlib=rb-4.0.3&q=80&w=2000"
            categoriesListName={categoriesList[3].name}
            categoriesListStyle={categoriesList[3].bgcolor}
            Cartitle="It is during our darkest moments that we must focus to see the light"
            cardDescription="You cannot too assiduously attend to Madame Duval herself; but I would wish you to mix as little as possible with her associates, who are not likely to be among those whose acquaintance would"
            authoName="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            postTime="12 minutes ago"
          />

          <Card
            imgageURL="https://images.unsplash.com/photo-1670349148055-e11a0b3be242?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=MnwxMTc3M3wxfDF8c2VhcmNofDI5fHxoYXBweXxlbnwwfHx8fDE2NzE0MzI2NjY&ixlib=rb-4.0.3&q=80&w=2000"
            categoriesListName={categoriesList[4].name}
            categoriesListStyle={categoriesList[4].bgcolor}
            Cartitle="It is during our darkest moments that we must focus to see the light"
            cardDescription="You cannot too assiduously attend to Madame Duval herself; but I would wish you to mix as little as possible with her associates, who are not likely to be among those whose acquaintance would"
            authoName="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            postTime="12 minutes ago"
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-lg text-white px-4 py-2 hover:opacity-85 my-5 flex justify-center">
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default AllBlogs;
