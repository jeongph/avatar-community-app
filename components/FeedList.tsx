import {FlatList, StyleSheet} from "react-native";
import FeedItem from "@/components/FeedItem";
import {colors} from "@/constants";
import useGetInfinitePosts from "@/hooks/queries/useGetInfinitePosts";
import {useRef, useState} from "react";
import {useScrollToTop} from "@react-navigation/native";

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
    const {data: posts, fetchNextPage, hasNextPage, isFetchingNextPage, refetch} = useGetInfinitePosts() // data -> posts 로 객체명을 바꿔줌
    console.log("===============================================\n")
    console.log('post:', posts);
    console.log("===============================================\n")
    console.log('pages:', posts?.pages);
    console.log("===============================================\n")

    const [isRefreshing, setIsRefreshing] = useState(false);

    const ref = useRef<FlatList | null>(null);
    useScrollToTop(ref);

    const handleRefresh = async () => {
        setIsRefreshing(true);
        await refetch();
        setIsRefreshing(false);
    }

    const handleEndReached = () => { // 페이지네이션의 다음 게시글을 조회해서 가져옴
        if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }

    const feedItems = posts?.pages.flatMap(page => page.content);
    // console.log('feedItems:', feedItems);

    return (
        <FlatList
            ref={ref}
            // data={posts?.pages.flat()}
            data={feedItems}
            renderItem={({item}) => <FeedItem post={item}/>}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={styles.contentContainer}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.5} // 화면이 맨아래까지 완전히 닿지 않고 절반정도에 미리 페이지 조회
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
        />
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 12,
        backgroundColor: colors.GRAY_200,
        gap: 12,
    },
});

export default FeedList;