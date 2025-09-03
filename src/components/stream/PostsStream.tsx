import { getPosts } from '@/utils/utils';
import { Grid } from '@once-ui-system/core';
import PostStream from './StreamContent';

interface PostsProps {
    range?: [number] | [number, number];
    columns?: '1' | '2' | '3';
    thumbnail?: boolean;
    direction?: 'row' | 'column';
}

export function PostsStream({
    range,
    columns = '1',
    thumbnail = false,
    direction
}: PostsProps) {
    let allBlogs = getPosts(['src', 'app', 'stream', 'content']);

    const sortedBlogs = allBlogs.sort((a, b) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    const displayedBlogs = range
        ? sortedBlogs.slice(
              range[0] - 1,
              range.length === 2 ? range[1] : sortedBlogs.length 
          )
        : sortedBlogs;

    return (
        <>
            {displayedBlogs.length > 0 && (
                <Grid
                    columns={columns} s={{columns: 1}}
                    fillWidth marginBottom="40" gap="12">
                    {displayedBlogs.map((post) => (
                        <PostStream
                            key={post.slug}
                            post={post}
                            thumbnail={thumbnail}
                            direction={direction}
                        />
                    ))}
                </Grid>
            )}
        </>
    );
}