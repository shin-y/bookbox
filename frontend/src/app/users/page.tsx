'use client'

import { useQuery } from '@apollo/client'
import { GET_USERS } from '@/lib/queries'
import { GetUsersQuery } from '@/gql/graphql'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function UsersPage() {
  const { data, loading, error } = useQuery<GetUsersQuery>(GET_USERS)

  if (loading) return <p>読み込み中...</p>
  if (error) return <p>エラー: {error.message}</p>

  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="scroll-m-20 text-center text-xl font-extrabold tracking-tight text-balance">Users</h3>
      <ul role="list" className="divide-y divide-gray-100">
        {data?.users.map((user) => (
          <li key={user.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left">
                <Avatar className="h-18 w-18 rounded-lg">
                    <AvatarImage src={user.iconUrl || ""} alt={user.name} />
                    <AvatarFallback className="rounded-lg">{user.name.slice(-2)}</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 leading-tight">
                    <p className="text-sm/6 font-semibold text-gray-900">{user.name}</p>
                    <p className="mt-1 truncate text-xs/5 text-gray-500">{user.email}</p>
                    {user.biography && (
                    <p className="text-sm mt-1">{user.biography}</p>
                    )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
