import { SparklesIcon } from '@heroicons/react/24/outline';

// Components
import Input from './Input';
import Post from './Post';

export default function Feed() {

    const posts = [
        {
            id: '1',
            name: 'Adrian Soto',
            username: 'adrianst0',
            userImg: 'https://media-exp1.licdn.com/dms/image/C5603AQFWV8NNd6QH7A/profile-displayphoto-shrink_800_800/0/1662679020955?e=1668038400&v=beta&t=QWyNI1d_HPnCV2RArX_UBFFLrj7QCj-XMvLNkDPqCyE',
            img: 'https://images.unsplash.com/photo-1580428180098-24b353d7e9d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
            text: 'Nice photo!',
            timestamp: '2 hours ago',
        },
        {
            id: '2',
            name: 'Adrian Soto',
            username: 'adrianst0',
            userImg: 'https://media-exp1.licdn.com/dms/image/C5603AQFWV8NNd6QH7A/profile-displayphoto-shrink_800_800/0/1662679020955?e=1668038400&v=beta&t=QWyNI1d_HPnCV2RArX_UBFFLrj7QCj-XMvLNkDPqCyE',
            img: 'https://images.unsplash.com/photo-1627589161730-0d90bea5a656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            text: 'Wow',
            timestamp: '2 days ago',
        }
    ];

    return(
        <div className='xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl'>
            <div className='flex items-center py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
                <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
                <div className='hoverEffect flex items-center justify-center px-0 py-0 ml-auto w-9 h-9'>
                    <SparklesIcon className='h-5' />
                </div>
            </div>
            <Input />
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}