import {FlatList, StyleSheet} from "react-native";
import FeedItem from "@/components/FeedItem";
import {colors} from "@/constants";

const mockData = [
    {
        id: 1,
        userId: 1,
        title: "Mock 게시글 제목",
        description: "아주 긴~ 게시글.아주 긴~ 게시글.아주 긴~ 게시글.아주 긴~ 게시글.아주 긴~ 게시글.아주 긴~ 게시글.아주 긴~ 게시글.아주 긴~ 게시글.아주 긴~ 게시글.아주 긴~ 게시글.아주 긴~ 게시글.아주 긴~ 게시글.",
        createdAt: "2025-04-29",
        author: {
            id: 1,
            nickname: "임시 닉네임",
            imageUri: ""
        },
        imageUris: [],
        likes: [],
        hasVote: false,
        voteCount: 1,
        commentCount: 1,
        viewCount: 1,
    },
    {
        id: 2,
        userId: 1,
        title: "Mock 게시글 제목",
        description: "아주 긴~ 게시글.아주 긴~ 게시글.아주 긴~ 게시글.아주 긴~ 게시글.아주 긴~ 게시글.아주 긴~ 게시글.아주 긴~ 게시글.아주 긴~ 게시글.아주 긴~ 게시글.아주 긴~ 게시글.아주 긴~ 게시글.아주 긴~ 게시글.",
        createdAt: "2025-04-27",
        author: {
            id: 1,
            nickname: "임시 닉네임",
            imageUri: ""
        },
        imageUris: [],
        likes: [],
        hasVote: false,
        voteCount: 1,
        commentCount: 1,
        viewCount: 1,
    }
]

function FeedList() {
    return (
        <FlatList
            data={mockData}
            renderItem={({item}) => <FeedItem post={item}/>}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={styles.content}
        />
    );
}

const styles = StyleSheet.create({
    content: {
        paddingVertical: 12,
        backgroundColor: colors.GRAY_200,
        gap: 12,
    },
});

export default FeedList;