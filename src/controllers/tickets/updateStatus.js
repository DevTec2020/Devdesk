export function updateStatus({request, response, database}) {
    const { id } = request.params

    database.update("tickets", id, {status: "Closed" })

    return response.end()
}